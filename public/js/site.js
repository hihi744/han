/* Đơm Hoa site enhancements: motion and interactive components.
 *
 * One plain-JS file shared by the Next.js site and the static preview, driven
 * entirely by data attributes in the server-rendered HTML:
 *   [data-reveal]        fade/slide in when scrolled into view
 *   [data-reveal-group]  staggers its [data-reveal] children
 *   [data-count]         count up to the number when seen
 *   [data-parallax]      gentle scroll parallax (desktop only)
 *   [data-magnetic]      buttons drift toward the pointer (desktop only)
 *   [data-journey]       Gieo – Ươm – Vun – Nở progress timeline
 *   [data-tabs]          accessible tabs / stepper with #hash support
 *   [data-quiz]          one-question-at-a-time self-assessment
 *
 * Everything degrades to the static page without JS, and motion is skipped
 * entirely when the visitor prefers reduced motion.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var seen = new WeakSet();
  var vnd = new Intl.NumberFormat("vi-VN");

  function once(el) {
    if (seen.has(el)) return false;
    seen.add(el);
    return true;
  }
  function inView(el, margin) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight * (1 - (margin || 0)) && r.bottom > 0;
  }

  /* ---------------- Reveal & counters ---------------- */
  var io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              if (!e.isIntersecting) return;
              var el = e.target;
              io.unobserve(el);
              if (el.hasAttribute("data-reveal")) el.setAttribute("data-in", "");
              if (el.hasAttribute("data-count")) countUp(el);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        )
      : null;

  function countUp(el) {
    var target = Number(el.getAttribute("data-count"));
    if (!isFinite(target)) return;
    var start = performance.now();
    var dur = 1600;
    function frame(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(2, -10 * t); // ease-out expo
      el.textContent = vnd.format(Math.round(target * (t === 1 ? 1 : eased)));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initReveal(root) {
    root.querySelectorAll("[data-reveal-group]").forEach(function (group) {
      var step = Number(group.getAttribute("data-reveal-group")) || 90;
      group.querySelectorAll("[data-reveal]").forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", i * step + "ms");
      });
    });
    root.querySelectorAll("[data-reveal], [data-count]").forEach(function (el) {
      if (!once(el)) return;
      if (reduce || !io) {
        el.setAttribute("data-in", "");
        return;
      }
      // Anything already on screen stays put: no flash on first paint.
      if (inView(el)) {
        el.setAttribute("data-in", "");
        if (el.hasAttribute("data-count")) countUp(el);
        return;
      }
      if (el.hasAttribute("data-count")) el.textContent = "0";
      io.observe(el);
    });
    if (!reduce) document.documentElement.setAttribute("data-motion", "on");
  }

  /* ---------------- Parallax & journey (one scroll loop) ---------------- */
  var parallaxEls = [];
  var journeys = [];
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var vh = window.innerHeight;
      parallaxEls = parallaxEls.filter(function (el) {
        return el.isConnected;
      });
      parallaxEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var factor = Number(el.getAttribute("data-parallax")) || 0.1;
        var offset = (r.top + r.height / 2 - vh / 2) * -factor;
        el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
      });
      journeys = journeys.filter(function (j) {
        return j.isConnected;
      });
      journeys.forEach(updateJourney);
    });
  }

  function updateJourney(j) {
    var r = j.getBoundingClientRect();
    var line = window.innerHeight * 0.62;
    var progress = Math.max(0, Math.min(1, (line - r.top) / r.height));
    j.style.setProperty("--journey-progress", progress.toFixed(3));
    j.querySelectorAll("[data-stage]").forEach(function (stage) {
      var node = stage.querySelector(".journey-node") || stage;
      var nr = node.getBoundingClientRect();
      if (nr.top + nr.height / 2 < line) stage.setAttribute("data-active", "");
      else stage.removeAttribute("data-active");
    });
  }

  function initScrollEffects(root) {
    if (!reduce && finePointer && window.innerWidth >= 768) {
      root.querySelectorAll("[data-parallax]").forEach(function (el) {
        if (once(el)) parallaxEls.push(el);
      });
    }
    root.querySelectorAll("[data-journey]").forEach(function (j) {
      if (!once(j)) return;
      if (reduce) {
        j.style.setProperty("--journey-progress", "1");
        j.querySelectorAll("[data-stage]").forEach(function (s) {
          s.setAttribute("data-active", "");
        });
        return;
      }
      journeys.push(j);
      updateJourney(j);
    });
    onScroll();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ---------------- Magnetic buttons ---------------- */
  function initMagnetic(root) {
    if (reduce || !finePointer) return;
    root.querySelectorAll("[data-magnetic]").forEach(function (el) {
      if (!once(el)) return;
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = "translate(" + dx * 0.18 + "px," + dy * 0.28 + "px)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ---------------- Tabs (also used for the 6-step stepper) ---------------- */
  // Tab boxes can nest, so each box only owns the tabs whose nearest [data-tabs] is itself.
  var tabBoxes = [];

  function initTabs(root) {
    root.querySelectorAll("[data-tabs]").forEach(function (box) {
      if (!once(box)) return;
      var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]')).filter(function (t) {
        return t.closest("[data-tabs]") === box;
      });
      var panels = tabs.map(function (t) {
        return document.getElementById(t.getAttribute("aria-controls"));
      });
      function select(i, focus) {
        tabs.forEach(function (t, k) {
          var on = k === i;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          if (on) t.setAttribute("data-selected", "");
          else t.removeAttribute("data-selected");
          panels[k].hidden = !on;
          if (on && !reduce) {
            panels[k].removeAttribute("data-anim");
            void panels[k].offsetWidth;
            panels[k].setAttribute("data-anim", "");
          }
        });
        if (focus) tabs[i].focus();
      }
      tabs.forEach(function (t, i) {
        t.addEventListener("click", function () {
          select(i, false);
        });
        t.addEventListener("keydown", function (e) {
          var keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
          if (e.key in keys) {
            e.preventDefault();
            select((i + keys[e.key] + tabs.length) % tabs.length, true);
          } else if (e.key === "Home") {
            e.preventDefault();
            select(0, true);
          } else if (e.key === "End") {
            e.preventDefault();
            select(tabs.length - 1, true);
          }
        });
      });
      tabBoxes.push({ box: box, panels: panels, select: select });
    });
    openHash();
  }

  // Open every tab panel on the way to the #hash target, outermost first, then scroll to it.
  function openHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (!target) return;
    // Open any "Xem chi tiết" sections that hide the target.
    for (var d = target.closest("details"); d; d = d.parentElement && d.parentElement.closest("details")) d.open = true;
    var opened = false;
    tabBoxes.forEach(function (t) {
      if (!document.contains(t.box) || !t.box.contains(target)) return;
      var i = t.panels.findIndex(function (p) {
        return p === target || p.contains(target);
      });
      if (i >= 0) {
        t.select(i, false);
        opened = true;
      }
    });
    if (!opened) return;
    // A panel scrolls to its own tab bar; anything inside a panel scrolls to itself.
    var dest = target.getAttribute("role") === "tabpanel" ? target.closest("[data-tabs]") : target;
    requestAnimationFrame(function () {
      dest.scrollIntoView({ block: "start" });
    });
  }
  window.addEventListener("hashchange", openHash);
  // Next.js links change the hash with pushState, which fires no hashchange event.
  ["pushState", "replaceState"].forEach(function (name) {
    var original = history[name];
    history[name] = function () {
      var result = original.apply(this, arguments);
      if (location.hash) setTimeout(openHash, 0);
      return result;
    };
  });

  /* ---------------- Quiz wizard ---------------- */
  function initQuiz(root) {
    root.querySelectorAll("[data-quiz]").forEach(function (quiz) {
      if (!once(quiz)) return;
      var slides = Array.prototype.slice.call(quiz.querySelectorAll("[data-quiz-slide]"));
      var bar = quiz.querySelector(".quiz-progress > span");
      var label = quiz.querySelector("[data-quiz-label]");
      var prev = quiz.querySelector("[data-quiz-prev]");
      var next = quiz.querySelector("[data-quiz-next]");
      var notice = quiz.querySelector("[data-quiz-notice]");
      var resultBox = quiz.querySelector("[data-quiz-result]");
      var stage = quiz.querySelector("[data-quiz-stage]");
      var data = JSON.parse(quiz.querySelector('script[type="application/json"]').textContent);
      var current = 0;
      var total = slides.length;

      quiz.setAttribute("data-enhanced", "");
      function answered() {
        return slides.map(function (s) {
          var c = s.querySelector("input:checked");
          return c ? Number(c.value) : null;
        });
      }
      function render(dir) {
        slides.forEach(function (s, i) {
          s.hidden = i !== current;
          if (i === current && dir && !reduce) {
            s.removeAttribute("data-anim");
            void s.offsetWidth;
            s.setAttribute("data-anim", dir);
          }
        });
        var done = answered().filter(function (v) {
          return v !== null;
        }).length;
        bar.style.width = (done / total) * 100 + "%";
        label.textContent = "Câu " + (current + 1) + "/" + total;
        prev.hidden = current === 0;
        var last = current === total - 1;
        next.textContent = last ? "Xem kết quả" : "Tiếp tục";
        notice.hidden = true;
      }
      function go(i) {
        var dir = i > current ? "next" : "prev";
        current = Math.max(0, Math.min(total - 1, i));
        render(dir);
        var h = slides[current].querySelector("legend, h3");
        if (h) h.focus({ preventScroll: true });
      }
      slides.forEach(function (s, i) {
        s.addEventListener("change", function () {
          render(null);
          // App-like: move on shortly after a choice, except on the last question.
          if (i < total - 1 && i === current) {
            setTimeout(function () {
              if (current === i) go(i + 1);
            }, reduce ? 0 : 380);
          }
        });
      });
      prev.addEventListener("click", function () {
        go(current - 1);
      });
      next.addEventListener("click", function () {
        if (current < total - 1) return go(current + 1);
        var a = answered();
        var missing = a.indexOf(null);
        if (missing !== -1) {
          notice.hidden = false;
          notice.focus();
          setTimeout(function () {
            go(missing);
          }, 1200);
          return;
        }
        showResult(
          a.reduce(function (s, v) {
            return s + v;
          }, 0),
        );
      });

      function showResult(score) {
        var level = data.results.findIndex(function (r) {
          return score >= r.min;
        });
        var r = data.results[level];
        stage.hidden = true;
        resultBox.hidden = false;
        resultBox.innerHTML = resultHtml(r, level);
        var counter = resultBox.querySelector("[data-score]");
        if (reduce) counter.textContent = score;
        else {
          var start = performance.now();
          (function tick(now) {
            var t = Math.min(1, (now - start) / 1400);
            counter.textContent = Math.round(score * (1 - Math.pow(1 - t, 3)));
            if (t < 1) requestAnimationFrame(tick);
          })(start);
        }
        if (level === 0 && !reduce) burst(resultBox.querySelector(".petal-burst"));
        resultBox.querySelector("[data-quiz-reset]").addEventListener("click", function () {
          slides.forEach(function (s) {
            s.querySelectorAll("input").forEach(function (i) {
              i.checked = false;
            });
          });
          resultBox.hidden = true;
          resultBox.innerHTML = "";
          stage.hidden = false;
          current = 0;
          render("prev");
          quiz.scrollIntoView({ block: "start" });
        });
        var h = resultBox.querySelector("h3");
        h.focus({ preventScroll: true });
        quiz.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
      }

      function resultHtml(r, level) {
        var moments = [
          '<div class="petal-burst" aria-hidden="true"></div>',
          '<svg class="sprout-grow absolute right-6 top-6 h-24 w-24 opacity-80" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 95 C50 70 50 55 50 40" fill="none" stroke="#7d9c65" stroke-width="4" stroke-linecap="round"/><path d="M50 58 C38 56 30 46 28 34 C40 34 50 42 50 58" fill="none" stroke="#ff9c4c" stroke-width="4" stroke-linecap="round"/><path d="M50 50 C62 48 70 38 72 26 C60 26 50 34 50 50" fill="none" stroke="#7d9c65" stroke-width="4" stroke-linecap="round"/></svg>',
          '<span class="seed-glow absolute right-8 top-8 block h-6 w-6 rounded-full bg-petal-yellow" aria-hidden="true"></span>',
        ];
        var btn = function (i) {
          return i === 0
            ? "btn-sweep inline-flex min-h-12 items-center justify-center rounded-full bg-blossom px-6 text-[15px] font-semibold text-moss-ink hover:bg-[#ef9da3]"
            : "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-on-dark ring-1 ring-inset ring-on-dark/35 hover:bg-on-dark/10";
        };
        return (
          '<div class="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">' +
          moments[level] +
          '<div class="orb" style="--orb-color:#ff9c4c;--orb-opacity:.35;width:420px;height:420px;right:-140px;top:-160px" aria-hidden="true"></div>' +
          '<div class="relative"><p class="text-[15px] text-on-dark-muted">Tổng điểm của bạn</p>' +
          '<p class="tabular text-[72px] font-extrabold leading-none tracking-tight text-petal-yellow"><span data-score>0</span><span class="text-[28px] text-on-dark-muted">/100</span></p>' +
          '<p class="mt-4 inline-block rounded-full bg-on-dark/10 px-4 py-1.5 text-sm font-semibold">' +
          r.range +
          "</p>" +
          '<h3 tabindex="-1" class="mt-6 text-[28px] text-on-dark outline-none md:text-[36px]">' +
          r.title +
          "</h3>" +
          r.body
            .map(function (p) {
              return '<p class="mt-4 max-w-3xl text-lg text-on-dark-muted">' + p + "</p>";
            })
            .join("") +
          '<div class="mt-8 flex flex-wrap gap-3">' +
          r.actions
            .map(function (a, i) {
              return '<a href="' + data.href(a.href) + '" class="' + btn(i) + '">' + a.label + "</a>";
            })
            .join("") +
          '<button type="button" data-quiz-reset class="' +
          btn(1) +
          ' cursor-pointer">Làm lại</button></div>' +
          '<p class="mt-8 border-t border-on-dark/15 pt-5 text-[14px] text-on-dark-muted">' +
          data.note +
          "</p></div></div>"
        );
      }
      // Link rewriting hook: the static preview flattens routes.
      data.href = window.__domhoaHref || function (h) {
        return h;
      };

      function burst(box) {
        if (!box) return;
        var colors = ["#b93636", "#ff9c4c", "#fff2a0", "#0c6a3b", "#7d9c65", "#e88b92"];
        for (var i = 0; i < 26; i++) {
          var p = document.createElement("i");
          var angle = Math.random() * Math.PI * 2;
          var dist = 140 + Math.random() * 260;
          p.style.setProperty("--x", Math.cos(angle) * dist + "px");
          p.style.setProperty("--y", Math.sin(angle) * dist * 0.7 + 60 + "px");
          p.style.setProperty("--r", Math.random() * 540 - 270 + "deg");
          p.style.setProperty("--d", Math.random() * 0.25 + "s");
          p.style.setProperty("--petal", colors[i % colors.length]);
          box.appendChild(p);
        }
      }

      render(null);
    });
  }

  /* ---------------- Entry point ---------------- */
  function init(root) {
    root = root || document;
    initReveal(root);
    initScrollEffects(root);
    initMagnetic(root);
    initTabs(root);
    initQuiz(root);
  }

  window.DomHoa = { init: init };
  // The Next.js app asks for init after hydration (and on every route change);
  // the static preview sets __domhoaAuto so the page enhances itself on load.
  if (window.__domhoaPending || window.__domhoaAuto) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { init(); });
    else init();
  }
})();
