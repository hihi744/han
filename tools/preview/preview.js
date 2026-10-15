// Interactive behaviour for the static preview (no Next.js runtime).
// Mirrors the React components: header menus, loan calculator, contact form
// and self-assessment. Forms are front-end only; nothing is sent or stored.
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const vnd = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });
  const money = (v) => `${vnd.format(Math.round(v))} đ`;
  const rateText = (r) => `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(r * 100)}%/tháng`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  /* ---------- Header ---------- */
  function initHeader() {
    const toggle = $('button[aria-controls="mobile-menu"]');
    const panel = $("#mobile-menu");
    if (toggle && panel) {
      const label = $(".sr-only", toggle);
      const set = (open) => {
        panel.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
        if (label) label.textContent = open ? "Đóng menu" : "Mở menu";
        document.body.style.overflow = open ? "hidden" : "";
        if (open) $("a", panel)?.focus();
      };
      toggle.addEventListener("click", () => set(panel.hidden));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !panel.hidden) {
          set(false);
          toggle.focus();
        }
      });
      $$("a", panel).forEach((a) => a.addEventListener("click", () => set(false)));
    }

    const triggers = $$("button[data-menu]");
    const menuOf = (btn) => document.getElementById(btn.getAttribute("aria-controls"));
    const close = (btn) => {
      btn.setAttribute("aria-expanded", "false");
      menuOf(btn).hidden = true;
      $("svg", btn)?.classList.remove("rotate-180");
    };
    const open = (btn) => {
      triggers.forEach((t) => t !== btn && close(t));
      btn.setAttribute("aria-expanded", "true");
      menuOf(btn).hidden = false;
      $("svg", btn)?.classList.add("rotate-180");
    };
    triggers.forEach((btn) => {
      const item = btn.parentElement;
      item.addEventListener("mouseenter", () => open(btn));
      item.addEventListener("mouseleave", () => close(btn));
      btn.addEventListener("click", (e) => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if (e.detail === 0 && expanded) close(btn);
        else open(btn);
      });
    });
    document.addEventListener("pointerdown", (e) => {
      triggers.forEach((btn) => !btn.parentElement.contains(e.target) && close(btn));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      triggers.forEach((btn) => {
        if (btn.getAttribute("aria-expanded") === "true") {
          close(btn);
          btn.focus();
        }
      });
    });

    // Mark the current page in the menus.
    const here = location.pathname.split("/").pop() || "index.html";
    const current = here === "index.html" ? "trang-chu.html" : here;
    $$("header a[href]").forEach((a) => {
      if (a.getAttribute("href") === current) a.setAttribute("aria-current", "page");
      else if (a.getAttribute("aria-current") === "page") a.removeAttribute("aria-current");
    });
  }

  /* ---------- Loan calculator (equal principal, declining balance) ---------- */
  const PACKAGES = {
    "goi-1": {
      min: 5e6, max: 30e6, terms: [6, 9, 12], amount: 10e6, term: 12,
      rate: (a) => (a <= 15e6 ? 0.008 : 0.01),
      note: (a) => (a <= 15e6 ? "Chu kỳ đầu (5–15 triệu): 0,8%/tháng" : "Chu kỳ tiếp theo (15–30 triệu): 1,0%/tháng"),
    },
    "goi-3": {
      min: 3e6, max: 15e6, terms: [6, 9, 12], amount: 8e6, term: 12,
      rate: () => 0.005,
      note: () => "0,5%/tháng trong thời gian học. Miễn toàn bộ lãi nếu hoàn thành khóa học và đạt chứng nhận nghề.",
    },
    "goi-4": {
      min: 15e6, max: 50e6, terms: [12, 18, 24], amount: 30e6, term: 18,
      rate: () => 0.0116,
      note: () => "Khung 1,0%–1,16%/tháng. Kết quả tính theo mức cao nhất của khung.",
    },
  };

  function schedule(amount, months, rate) {
    const principal = amount / months;
    let balance = amount;
    const rows = [];
    for (let m = 1; m <= months; m++) {
      const interest = balance * rate;
      balance -= principal;
      rows.push({ m, principal, interest, payment: principal + interest });
    }
    return rows;
  }

  function initCalculator(pkgFieldset) {
    const root = pkgFieldset.parentElement;
    const state = {};
    Object.keys(PACKAGES).forEach((k) => (state[k] = { amount: PACKAGES[k].amount, term: PACKAGES[k].term }));
    let current = "goi-1";

    const range = $("input.range", root);
    const amountOut = $("output", root);
    const limits = range.nextElementSibling;
    const termFieldset = $$("fieldset", root)[1];
    const chipBox = $("div", termFieldset);
    const chipTemplate = chipBox.firstElementChild.cloneNode(true);
    const rateBox = $("p.bg-pollen-tint", root);
    const results = $('[aria-live="polite"]', root);
    const [, firstP, lastP] = $$(":scope > p", results);
    const dl = $("dl", results);
    const rowTemplate = dl.firstElementChild.cloneNode(true);
    const tableBtn = $("button[aria-controls]", results);
    const table = document.getElementById(tableBtn.getAttribute("aria-controls"));
    const cta = $('a[href^="lien-he"]', results);

    const millions = (v) => `${vnd.format(v / 1e6)} triệu`;
    const dlRow = (label, value, sub) => {
      const row = rowTemplate.cloneNode(true);
      $("dt", row).textContent = label;
      const dd = $("dd", row);
      dd.textContent = value;
      if (sub) {
        dd.classList.add("text-right");
        const s = document.createElement("span");
        s.className = "block text-[13px] font-normal text-on-dark-muted";
        s.textContent = sub;
        dd.appendChild(s);
      }
      return row;
    };

    function render() {
      const p = PACKAGES[current];
      const st = state[current];
      const rate = p.rate(st.amount);
      range.min = p.min;
      range.max = p.max;
      range.step = p.max - p.min > 30e6 ? 1e6 : 5e5;
      range.value = st.amount;
      range.style.setProperty("--pct", `${((st.amount - p.min) / (p.max - p.min)) * 100}%`);
      range.setAttribute("aria-valuetext", money(st.amount));
      amountOut.textContent = money(st.amount);
      limits.children[0].textContent = millions(p.min);
      limits.children[1].textContent = millions(p.max);

      chipBox.innerHTML = "";
      p.terms.forEach((m) => {
        const chip = chipTemplate.cloneNode(true);
        const input = $("input", chip);
        input.value = String(m);
        input.checked = m === st.term;
        input.addEventListener("change", () => {
          st.term = m;
          render();
        });
        $("span", chip).textContent = `${m} tháng`;
        chipBox.appendChild(chip);
      });

      rateBox.innerHTML = `<span class="font-semibold">Lãi suất ${rateText(rate)}.</span> ${esc(p.note(st.amount))}`;

      const rows = schedule(st.amount, st.term, rate);
      const interest = rows.reduce((s, r) => s + r.interest, 0);
      firstP.textContent = money(rows[0].payment);
      lastP.textContent = `giảm dần đến ${money(rows[rows.length - 1].payment)} ở tháng cuối`;
      dl.replaceChildren(dlRow("Tổng tiền lãi", money(interest)), dlRow("Tổng gốc và lãi", money(st.amount + interest)));
      if (current === "goi-3") dl.appendChild(dlRow("Nếu hoàn thành khóa học", money(st.amount), "miễn toàn bộ lãi"));
      $("tbody", table).innerHTML = rows
        .map(
          (r) =>
            `<tr class="border-t border-on-dark/8"><td class="px-3 py-2">${r.m}</td><td class="px-3 py-2">${money(r.principal)}</td><td class="px-3 py-2">${money(r.interest)}</td><td class="px-3 py-2 text-right">${money(r.payment)}</td></tr>`,
        )
        .join("");
      cta.setAttribute("href", `lien-he.html?goi=${current}&so-tien=${st.amount}&ky-han=${st.term}#dang-ky`);
    }

    $$("input[type=radio]", pkgFieldset).forEach((input) =>
      input.addEventListener("change", () => {
        current = input.value;
        render();
      }),
    );
    range.addEventListener("input", () => {
      state[current].amount = Number(range.value);
      render();
    });
    tableBtn.addEventListener("click", () => {
      table.hidden = !table.hidden;
      tableBtn.setAttribute("aria-expanded", String(!table.hidden));
      tableBtn.textContent = table.hidden ? "Xem lịch trả từng tháng" : "Ẩn lịch trả từng tháng";
    });
    render();
  }

  /* ---------- Shared form helpers ---------- */
  const errorClass = "mt-2 text-sm font-medium text-blossom-deep";
  const isPhone = (v) => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v.replace(/[\s.-]/g, ""));

  function setError(id, message, anchor) {
    let el = document.getElementById(`${id}-error`);
    if (!el && message) {
      el = document.createElement("p");
      el.id = `${id}-error`;
      el.className = errorClass;
      anchor.after(el);
    }
    if (el) {
      el.textContent = message || "";
      el.hidden = !message;
    }
    const control = document.getElementById(id);
    if (control && /^(INPUT|SELECT|TEXTAREA)$/.test(control.tagName)) {
      control.setAttribute("aria-invalid", String(!!message));
      const hint = document.getElementById(`${id}-hint`) ? `${id}-hint` : "";
      const by = [hint, message ? `${id}-error` : ""].filter(Boolean).join(" ");
      by ? control.setAttribute("aria-describedby", by) : control.removeAttribute("aria-describedby");
    }
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    const nameInput = $("#c-fullName");
    if (!nameInput) return;
    const form = nameInput.closest("form");

    // Prefill from the calculator link.
    const params = new URLSearchParams(location.search);
    const amount = Number(params.get("so-tien")) || 0;
    const term = Number(params.get("ky-han")) || 0;
    const pkg = params.get("goi");
    if (pkg || (amount && term)) {
      $("#c-need").value = "Vay vốn";
      if (pkg) $("#c-packageId").value = pkg;
      if (amount && term) $("#c-note").value = `Tôi đã tính thử khoản vay ${money(amount)} trong ${term} tháng.`;
    }

    const anchors = {
      "c-fullName": () => $("#c-fullName").parentElement,
      "c-phone": () => $("#c-phone").parentElement,
      "c-need": () => $("#c-need").parentElement,
      "c-area": () => $("#c-area"),
      "c-callTime": () => $("#c-callTime"),
      "c-consent": () => $("#c-consent").closest("label"),
    };
    form.addEventListener("input", (e) => {
      const t = e.target;
      const id = t.type === "radio" ? `c-${t.name}` : t.id;
      if (anchors[id]) setError(id, "", anchors[id]());
    });
    form.addEventListener("change", (e) => {
      const t = e.target;
      const id = t.type === "radio" ? `c-${t.name}` : t.id;
      if (anchors[id]) setError(id, "", anchors[id]());
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const v = (k) => String(fd.get(k) || "").trim();
      const checks = [
        ["c-fullName", !v("fullName") && "Vui lòng cho biết tên để cán bộ xưng hô."],
        ["c-phone", !isPhone(v("phone")) && "Số điện thoại chưa đúng. Ví dụ: 0912 345 678"],
        ["c-need", !v("need") && "Vui lòng chọn nhu cầu của chị."],
        ["c-area", !v("area") && "Vui lòng chọn khu vực chị đang sống."],
        ["c-callTime", !v("callTime") && "Vui lòng chọn giờ thuận tiện để nghe máy."],
        ["c-consent", !fd.get("consent") && "Vui lòng đồng ý để Đơm Hoa liên hệ với chị."],
      ];
      checks.forEach(([id, msg]) => setError(id, msg, anchors[id]()));
      const bad = checks.find(([, msg]) => msg);
      if (bad) {
        document.getElementById(bad[0])?.focus();
        return;
      }
      const btn = $('button[type="submit"]', form);
      btn.disabled = true;
      btn.textContent = "Đang gửi…";
      setTimeout(() => {
        const done = document.createElement("div");
        done.setAttribute("role", "status");
        done.className = "rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-10";
        done.innerHTML = `<svg width="48" height="48" viewBox="0 0 256 256" fill="currentColor" class="text-moss" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg><h3 tabindex="-1" class="mt-5 text-[28px] text-moss-ink outline-none">Đã nhận. Cảm ơn ${esc(v("fullName"))}.</h3><p class="mt-3 text-lg text-ink-muted">Cán bộ tín dụng nữ của Đơm Hoa sẽ gọi cho chị vào ${esc(v("callTime").toLowerCase())} trong giờ làm việc. Nếu cần gấp, chị có thể gọi hotline 024-68 686 868.</p><p class="mt-4 text-sm text-ink-muted">Bản xem thử: form chưa nối hệ thống nên thông tin chưa được gửi đi.</p>`;
        form.replaceWith(done);
        $("h3", done).focus();
      }, 900);
    });
  }

  /* ---------- Self-assessment ---------- */
  const RESULTS = [
    {
      min: 70, range: "70 – 100 điểm", title: "Chúc mừng chị, hạt mầm đã sẵn sàng!",
      body: [
        "Dựa trên những chia sẻ của chị, hồ sơ của chị phù hợp với các gói hỗ trợ của Đơm Hoa. Kế hoạch của chị đã có hình hài, và chúng tôi rất muốn được đồng hành cùng chị ở bước tiếp theo.",
        "Chị có thể đặt lịch một buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo, để cùng chọn gói vay phù hợp nhất. Chị không cần mang theo gì cả, và có thể dừng lại bất cứ lúc nào.",
      ],
      actions: [["Đăng ký tư vấn riêng", "lien-he.html#dang-ky"]],
    },
    {
      min: 50, range: "50 – 69 điểm", title: "Mầm đã nhú, mình cùng chăm thêm nhé",
      body: [
        "Chị đã có nền tảng tốt để bắt đầu. Với một chút hướng dẫn thêm về kế hoạch và cách điều chỉnh khoản vay, chị hoàn toàn có thể tự tin bước tiếp.",
        "Đơm Hoa sẽ cùng chị đi qua buổi tập huấn đầu vào, sau đó trò chuyện với cán bộ tín dụng để chọn khoản vay nhỏ hoặc khóa học nghề phù hợp. Chị không phải đi một mình.",
      ],
      actions: [["Đăng ký tư vấn riêng", "lien-he.html#dang-ky"], ["Tìm hiểu Gói học nghề", "san-pham-tai-chinh.html#goi-3"]],
    },
    {
      min: 0, range: "Dưới 50 điểm", title: "Chưa phải lúc vay, nhưng Đơm Hoa vẫn ở đây",
      body: [
        "Ở thời điểm này, chị có thể cần thêm thời gian để chuẩn bị cho kế hoạch của mình. Đây không phải lời từ chối. Mỗi hạt giống đều có nhịp nảy mầm riêng, và chúng tôi sẵn lòng chờ cùng chị.",
        "Chị có thể tham gia lớp giáo dục tài chính, trò chuyện về chọn nghề, hoặc bắt đầu bằng tiết kiệm mục tiêu. Sau khoảng 2–3 tháng, chúng ta cùng xem lại để chị bước tiếp thật vững vàng.",
      ],
      actions: [["Tham gia lớp giáo dục tài chính", "san-pham-cong-dong.html#giao-duc-tai-chinh"], ["Đặt lịch xem lại sau", "lien-he.html#dang-ky"]],
    },
  ];
  const btn = (variant) =>
    `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[background-color,transform] duration-200 ease-out cursor-pointer ${
      variant === "blossom" ? "bg-blossom text-moss-ink hover:bg-[#ef9da3]" : "text-on-dark ring-1 ring-inset ring-on-dark/35 hover:bg-on-dark/10"
    }`;

  function initAssessment() {
    const submit = $$("button").find((b) => b.textContent.trim() === "Xem kết quả");
    if (!submit) return;
    const form = submit.closest("form");
    const fieldsets = $$("fieldset", form);
    const counter = submit.parentElement.querySelector("p span");
    let notice, result;

    const answers = () => fieldsets.map((fs) => $("input:checked", fs)).map((i) => (i ? Number(i.value) : null));
    form.addEventListener("change", () => {
      counter.textContent = `${answers().filter((v) => v !== null).length}/5`;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const a = answers();
      fieldsets.forEach((fs, i) => {
        const missing = a[i] === null;
        fs.classList.toggle("ring-2", missing);
        fs.classList.toggle("ring-blossom-deep", missing);
        fs.classList.toggle("ring-sprout-line", !missing);
      });
      notice?.remove();
      result?.remove();
      if (a.some((v) => v === null)) {
        notice = document.createElement("p");
        notice.tabIndex = -1;
        notice.setAttribute("role", "alert");
        notice.className = "mt-6 rounded-[var(--radius-card)] bg-pollen-tint p-5 font-medium text-moss-ink outline-none";
        notice.textContent = "Chị còn vài câu chưa chọn. Chị cứ thong thả, hoàn thành đủ 5 tiêu chí để xem kết quả nhé.";
        form.appendChild(notice);
        notice.focus();
        return;
      }
      const total = a.reduce((s, v) => s + v, 0);
      const r = RESULTS.find((x) => total >= x.min);
      result = document.createElement("div");
      result.tabIndex = -1;
      result.setAttribute("role", "status");
      result.className = "on-dark mt-8 scroll-mt-32 rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark outline-none sm:p-12";
      result.innerHTML = `<div class="flex flex-wrap items-end justify-between gap-6"><div><p class="text-[15px] text-on-dark-muted">Tổng điểm của chị</p><p class="tabular text-[64px] font-extrabold leading-none tracking-tight text-petal-yellow">${total}<span class="text-[28px] text-on-dark-muted">/100</span></p></div><p class="rounded-full bg-on-dark/10 px-4 py-1.5 text-sm font-semibold text-on-dark">${r.range}</p></div><h3 class="mt-8 text-[28px] text-on-dark md:text-[34px]">${r.title}</h3>${r.body
        .map((p) => `<p class="mt-4 max-w-3xl text-lg text-on-dark-muted">${p}</p>`)
        .join("")}<div class="mt-8 flex flex-wrap gap-3">${r.actions
        .map(([label, href], i) => `<a href="${href}" class="${btn(i === 0 ? "blossom" : "outline")}">${label}</a>`)
        .join("")}<button type="button" data-reset class="${btn("outline")}">Làm lại</button></div><p class="mt-8 border-t border-on-dark/15 pt-5 text-[14px] text-on-dark-muted">Kết quả chỉ mang tính tham khảo ban đầu, không thay thế buổi tư vấn và thẩm định riêng. Đơm Hoa không lưu câu trả lời của chị.</p>`;
      form.appendChild(result);
      $("[data-reset]", result).addEventListener("click", () => {
        form.reset();
        result.remove();
        counter.textContent = "0/5";
        document.getElementById("buoc-2")?.scrollIntoView({ block: "start" });
      });
      result.focus();
    });
  }

  function init() {
    initHeader();
    const pkgFieldset = $$("fieldset").find((f) => $("legend", f)?.textContent === "Chọn gói vay");
    if (pkgFieldset) initCalculator(pkgFieldset);
    initContactForm();
    initAssessment();
  }

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
