// Interactive behaviour for the static preview (no Next.js runtime).
// Mirrors the React components: header menus, loan calculator, story rail,
// partner form and the three-step enquiry form. Forms are front-end only.
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const vnd = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });
  const money = (v) => `${vnd.format(Math.round(v))} đ`;
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
      triggers.forEach((btn) => {
        if (!btn.parentElement.contains(e.target)) close(btn);
      });
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
  const RATE = 0.09;
  function schedule(amount, months) {
    const principal = amount / months;
    let balance = amount;
    const rows = [];
    for (let m = 1; m <= months; m++) {
      const interest = (balance * RATE) / 12;
      balance -= principal;
      rows.push({ m, principal, interest, payment: principal + interest });
    }
    return rows;
  }

  function initCalculator(range) {
    const panel = range.closest(".grid");
    const amountOut = $("output", panel);
    const roundPill = amountOut.previousElementSibling.querySelector("span");
    const chips = $("fieldset > div", panel);
    const chipTemplate = chips.firstElementChild.cloneNode(true);
    const results = $('[aria-live="polite"]', panel);
    const [, firstP, lastP] = $$(":scope > p", results);
    const dds = $$("dl dd", results);
    const tableBtn = $("button[aria-controls]", results);
    const table = document.getElementById(tableBtn.getAttribute("aria-controls"));
    const cta = $('a[href^="dang-ky"]', results);
    let term = 12;

    const warning = document.createElement("p");
    warning.className = "mt-3 rounded-xl bg-pollen-tint px-4 py-3 text-[15px] text-[#5c4d0e]";
    warning.textContent =
      "Vòng 1 tối đa 10 triệu, Vòng 2 bắt đầu từ 15 triệu sau khi thẩm định lại. Bạn vẫn có thể tính thử để tham khảo.";
    warning.hidden = true;
    range.nextElementSibling.after(warning);

    function render() {
      const amount = Number(range.value);
      const r1 = amount <= 10000000;
      const [min, max] = r1 ? [6, 12] : [12, 18];
      term = Math.min(Math.max(term, min), max);
      const pct = ((amount - 5000000) / 25000000) * 100;
      range.style.setProperty("--pct", `${pct}%`);
      range.setAttribute("aria-valuetext", money(amount));
      amountOut.textContent = money(amount);
      roundPill.textContent = r1 ? "Vòng 1" : amount >= 15000000 ? "Vòng 2" : "Giữa hai vòng";
      warning.hidden = !(amount > 10000000 && amount < 15000000);

      chips.innerHTML = "";
      for (let m = min; m <= max; m += 3) {
        const chip = chipTemplate.cloneNode(true);
        const input = $("input", chip);
        input.value = String(m);
        input.checked = m === term;
        input.addEventListener("change", () => {
          term = m;
          render();
        });
        $("span", chip).textContent = `${m} tháng`;
        chips.appendChild(chip);
      }

      const rows = schedule(amount, term);
      const interest = rows.reduce((s, r) => s + r.interest, 0);
      firstP.textContent = money(rows[0].payment);
      lastP.textContent = `giảm dần đến ${money(rows[rows.length - 1].payment)} ở tháng cuối`;
      dds[0].textContent = money(interest);
      dds[1].textContent = money(amount + interest);
      dds[2].firstChild.textContent = money(amount * 0.02);
      $("tbody", table).innerHTML = rows
        .map(
          (r) =>
            `<tr class="border-t border-on-dark/8"><td class="px-3 py-2">${r.m}</td><td class="px-3 py-2">${money(r.principal)}</td><td class="px-3 py-2">${money(r.interest)}</td><td class="px-3 py-2 text-right">${money(r.payment)}</td></tr>`,
        )
        .join("");
      cta.setAttribute("href", `dang-ky.html?so-tien=${amount}&ky-han=${term}`);
    }

    range.addEventListener("input", render);
    tableBtn.addEventListener("click", () => {
      table.hidden = !table.hidden;
      tableBtn.setAttribute("aria-expanded", String(!table.hidden));
      tableBtn.textContent = table.hidden ? "Xem lịch trả từng tháng" : "Ẩn lịch trả từng tháng";
    });
    render();
  }

  /* ---------- Story rail ---------- */
  function initStories() {
    const rail = $('ul[aria-labelledby="stories-title"]');
    if (!rail) return;
    const scroll = (dir) => {
      const card = $("li", rail);
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      rail.scrollBy({ left: dir * ((card ? card.clientWidth : 320) + 20), behavior: reduce ? "auto" : "smooth" });
    };
    $('button[aria-label="Câu chuyện trước"]')?.addEventListener("click", () => scroll(-1));
    $('button[aria-label="Câu chuyện tiếp theo"]')?.addEventListener("click", () => scroll(1));
  }

  /* ---------- Shared form bits (same classes as the React components) ---------- */
  const inputClass =
    "block w-full min-h-12 rounded-xl bg-paper px-4 py-3 text-[16px] text-ink ring-1 ring-inset ring-sprout-line placeholder:text-ink-muted/70 transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-moss aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-blossom-deep";
  const primaryBtn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[background-color,transform] duration-200 ease-out active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 bg-moss text-on-dark hover:bg-moss-deep";
  const ghostBtn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[background-color,transform] duration-200 ease-out active:scale-[0.98] cursor-pointer text-moss hover:bg-sprout";
  const errorText = "mt-2 text-sm font-medium text-blossom-deep";
  const checkIcon =
    '<svg width="48" height="48" viewBox="0 0 256 256" fill="currentColor" class="text-moss" aria-hidden="true"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>';
  const sending = (btn, on, label) => {
    btn.disabled = on;
    btn.textContent = on ? "Đang gửi…" : label;
  };
  const isPhone = (v) => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v.replace(/[\s.-]/g, ""));

  function field(id, label, { required = false, hint = "", control }) {
    return `<div><label for="${id}" class="block text-[15px] font-medium text-moss-ink">${label}${
      required
        ? '<span class="text-blossom-deep" aria-hidden="true"> *</span>'
        : '<span class="font-normal text-ink-muted"> (không bắt buộc)</span>'
    }</label>${hint ? `<p id="${id}-hint" class="mt-1 text-sm text-ink-muted">${hint}</p>` : ""}<div class="mt-2">${control}</div><p id="${id}-error" class="${errorText}" hidden></p></div>`;
  }

  function showError(id, message) {
    const el = document.getElementById(`${id}-error`);
    const control = document.getElementById(id);
    if (el) {
      el.textContent = message || "";
      el.hidden = !message;
    }
    if (control && /^(INPUT|SELECT|TEXTAREA)$/.test(control.tagName)) {
      control.setAttribute("aria-invalid", String(!!message));
      const hint = document.getElementById(`${id}-hint`) ? `${id}-hint` : "";
      const by = [hint, message ? `${id}-error` : ""].filter(Boolean).join(" ");
      by ? control.setAttribute("aria-describedby", by) : control.removeAttribute("aria-describedby");
    }
  }

  /* ---------- Partner form ---------- */
  function initPartnerForm() {
    const org = $("#p-organisation");
    if (!org) return;
    const form = org.closest("form");
    form.querySelectorAll("[id]").forEach((el) => {
      if (/^p-(organisation|contactName|email|interest)$/.test(el.id) && !document.getElementById(`${el.id}-error`)) {
        const p = document.createElement("p");
        p.id = `${el.id}-error`;
        p.className = errorText;
        p.hidden = true;
        el.parentElement.after(p);
      }
    });
    const btn = $('button[type="submit"]', form);
    const label = btn.textContent;
    form.addEventListener("input", (e) => e.target.id && showError(e.target.id, ""));
    form.addEventListener("change", (e) => e.target.id && showError(e.target.id, ""));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (id) => ($(`#${id}`).value || "").trim();
      const checks = [
        ["p-organisation", !v("p-organisation") && "Vui lòng nhập tên đơn vị hoặc tên của bạn."],
        ["p-contactName", !v("p-contactName") && "Vui lòng nhập tên người liên hệ."],
        ["p-email", !/^\S+@\S+\.\S+$/.test(v("p-email")) && "Email chưa đúng, ví dụ: ten@congty.vn"],
        ["p-interest", !v("p-interest") && "Vui lòng chọn hình thức bạn quan tâm."],
      ];
      checks.forEach(([id, msg]) => showError(id, msg));
      const firstBad = checks.find(([, msg]) => msg);
      if (firstBad) {
        $(`#${firstBad[0]}`).focus();
        return;
      }
      sending(btn, true, label);
      setTimeout(() => {
        const done = document.createElement("div");
        done.setAttribute("role", "status");
        done.className = "rounded-[var(--radius-card)] bg-paper p-8 sm:p-10";
        done.innerHTML = `${checkIcon}<h3 class="mt-4 text-[26px] text-moss-ink">Đã gửi. Cảm ơn bạn đã muốn đồng hành.</h3><p class="mt-2 text-ink-muted">Đội ngũ Đơm Hoa sẽ liên hệ qua email trong vòng 3 ngày làm việc, kèm đề án chi tiết của dự án.</p><p class="mt-4 text-sm text-ink-muted">Bản xem thử: form chưa nối hệ thống nên thông tin chưa được gửi đi.</p>`;
        form.replaceWith(done);
      }, 900);
    });
  }

  /* ---------- Three-step enquiry form ---------- */
  function initEnquiryForm() {
    if (!/dang-ky\.html$/.test(location.pathname)) return;
    const slot = $(".min-h-\\[520px\\]");
    if (!slot) return;

    const needs = [
      ["vay-von", "Vay vốn để làm ăn", "Mở rộng hoặc bắt đầu một công việc nhỏ."],
      ["hoc-nghe", "Học nghề, tìm việc làm", "Muốn có tay nghề hoặc một chỗ làm ổn định."],
      ["chua-ro", "Chưa rõ, muốn được tư vấn", "Cán bộ sẽ lắng nghe và gợi ý bước đầu tiên."],
    ];
    const situations = [
      ["dang-kinh-doanh", "Tôi đang buôn bán hoặc làm dịch vụ", "Đã có khách và có thu nhập."],
      ["co-nghe", "Tôi có tay nghề, chưa có nhiều khách", "Ví dụ: may, làm bánh, cắt tóc, nấu ăn."],
      ["chua-co-viec", "Tôi chưa có việc làm ổn định", "Không sao, chúng tôi sẽ bắt đầu từ lớp học."],
    ];
    const callTimes = ["Buổi sáng", "Buổi trưa", "Buổi chiều", "Buổi tối"];
    const titles = ["Bạn cần Đơm Hoa giúp điều gì?", "Công việc hiện tại của bạn", "Để chúng tôi gọi lại cho bạn"];

    const params = new URLSearchParams(location.search);
    const amount = Number(params.get("so-tien")) || 0;
    const term = Number(params.get("ky-han")) || 0;
    const data = {
      need: amount && term ? "vay-von" : "",
      situation: "",
      trade: "",
      fullName: "",
      phone: "",
      province: "",
      callTime: "",
      note: amount && term ? `Tôi đã tính thử khoản vay ${money(amount)} trong ${term} tháng.` : "",
      consent: false,
    };
    let step = 0;

    const choice = (name, [value, title, body]) =>
      `<label class="block cursor-pointer"><input type="radio" name="${name}" value="${value}" ${
        data[name] === value ? "checked" : ""
      } class="peer sr-only"><span class="block h-full rounded-2xl bg-paper p-5 ring-1 ring-inset ring-sprout-line transition-[box-shadow,background-color] duration-150 hover:bg-sprout/50 peer-checked:bg-sprout peer-checked:ring-2 peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep"><span class="block font-medium text-moss-ink">${title}</span><span class="mt-1 block text-[15px] text-ink-muted">${body}</span></span></label>`;

    function stepBody() {
      if (step === 0) {
        return `<fieldset class="mt-6"><legend class="sr-only">${titles[0]}</legend><div id="f-need" tabindex="-1" class="grid gap-3 outline-none">${needs
          .map((n) => choice("need", n))
          .join("")}</div><p id="f-need-error" class="${errorText}" hidden></p></fieldset>`;
      }
      if (step === 1) {
        return `<div class="mt-6 space-y-8"><fieldset><legend class="sr-only">${titles[1]}</legend><div id="f-situation" tabindex="-1" class="grid gap-3 outline-none">${situations
          .map((s) => choice("situation", s))
          .join("")}</div><p id="f-situation-error" class="${errorText}" hidden></p></fieldset>${field(
          "f-trade",
          "Bạn đang làm hoặc muốn làm nghề gì?",
          { control: `<input id="f-trade" name="trade" value="${esc(data.trade)}" placeholder="Ví dụ: bán xôi buổi sáng" class="${inputClass}">` },
        )}</div>`;
      }
      return `<div class="mt-6 space-y-6"><div class="grid gap-6 sm:grid-cols-2">${field("f-fullName", "Tên của bạn", {
        required: true,
        hint: "Tên thường gọi là đủ.",
        control: `<input id="f-fullName" name="fullName" autocomplete="given-name" value="${esc(data.fullName)}" class="${inputClass}" aria-describedby="f-fullName-hint">`,
      })}${field("f-phone", "Số điện thoại", {
        required: true,
        hint: "Chỉ cán bộ phụ trách được xem.",
        control: `<input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(data.phone)}" class="${inputClass}" aria-describedby="f-phone-hint">`,
      })}</div>${field("f-province", "Tỉnh hoặc thành phố bạn đang sống", {
        required: true,
        control: `<input id="f-province" name="province" autocomplete="address-level1" value="${esc(data.province)}" class="${inputClass}">`,
      })}<fieldset><legend class="text-[15px] font-medium text-moss-ink">Giờ thuận tiện để nghe máy<span class="text-blossom-deep" aria-hidden="true"> *</span></legend><div id="f-callTime" tabindex="-1" class="mt-2 flex flex-wrap gap-2 outline-none">${callTimes
        .map(
          (t) =>
            `<label class="cursor-pointer"><input type="radio" name="callTime" value="${t}" ${
              data.callTime === t ? "checked" : ""
            } class="peer sr-only"><span class="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium ring-1 ring-inset ring-sprout-line hover:bg-sprout peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">${t}</span></label>`,
        )
        .join("")}</div><p id="f-callTime-error" class="${errorText}" hidden></p></fieldset>${field("f-note", "Bạn muốn nhắn gì thêm?", {
        control: `<textarea id="f-note" name="note" rows="3" class="${inputClass} resize-y">${esc(data.note)}</textarea>`,
      })}<div><label class="flex cursor-pointer gap-3"><input id="f-consent" name="consent" type="checkbox" ${
        data.consent ? "checked" : ""
      } class="mt-1 size-5 shrink-0 cursor-pointer accent-moss"><span class="text-[15px] text-ink-muted">Tôi đồng ý để Đơm Hoa dùng thông tin này để gọi tư vấn cho tôi. Thông tin không được chia sẻ cho bên thứ ba. <a href="bao-mat.html" class="font-medium text-moss underline underline-offset-2">Cam kết bảo mật</a></span></label><p id="f-consent-error" class="${errorText}" hidden></p></div></div>`;
    }

    const form = document.createElement("form");
    form.noValidate = true;
    form.className = "rounded-[var(--radius-panel)] bg-paper p-6 ring-1 ring-sprout-line sm:p-10";
    slot.replaceWith(form);

    function collect() {
      const fd = new FormData(form);
      ["need", "situation", "callTime"].forEach((k) => fd.has(k) && (data[k] = fd.get(k)));
      ["trade", "fullName", "phone", "province", "note"].forEach((k) => fd.has(k) && (data[k] = String(fd.get(k))));
      if (step === 2) data.consent = !!$("#f-consent", form)?.checked;
    }

    function render(focusHeading) {
      form.innerHTML = `<div class="flex items-center justify-between gap-4"><p class="tabular text-[15px] font-medium text-ink-muted">Bước ${step + 1} / 3</p>${
        step > 0
          ? '<button type="button" data-back class="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-3 text-[15px] font-medium text-moss hover:bg-sprout">← Quay lại</button>'
          : ""
      }</div><div class="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">${[0, 1, 2]
        .map((i) => `<span class="h-1.5 rounded-full transition-colors duration-300 ${i <= step ? "bg-moss" : "bg-sprout"}"></span>`)
        .join("")}</div><h2 tabindex="-1" class="mt-8 text-[26px] text-moss-ink outline-none sm:text-[32px]">${titles[step]}</h2>${stepBody()}<div class="mt-10 flex flex-col-reverse gap-4 border-t border-sprout-line pt-6 sm:flex-row sm:items-center sm:justify-between"><p class="flex items-center gap-2 text-sm text-ink-muted">Không hỏi về quá khứ. Không cần giấy tờ ở bước này.</p><button type="submit" class="${primaryBtn} w-full sm:w-auto">${
        step < 2 ? "Tiếp tục" : "Gửi đăng ký"
      }</button></div>`;
      $("[data-back]", form)?.addEventListener("click", () => {
        collect();
        step -= 1;
        render(true);
      });
      if (focusHeading) $("h2", form).focus();
    }

    // Clear a field's error as soon as the person edits it, like the React form.
    const clearOwnError = (e) => {
      const t = e.target;
      const id = t.type === "radio" ? `f-${t.name}` : t.id;
      if (id) showError(id, "");
    };
    form.addEventListener("input", clearOwnError);
    form.addEventListener("change", clearOwnError);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      collect();
      const errs = [];
      if (step === 0 && !data.need) errs.push(["f-need", "Vui lòng chọn một nhu cầu."]);
      if (step === 1 && !data.situation) errs.push(["f-situation", "Vui lòng chọn tình huống gần nhất với bạn."]);
      if (step === 2) {
        if (!data.fullName.trim()) errs.push(["f-fullName", "Vui lòng cho biết tên để cán bộ xưng hô."]);
        if (!isPhone(data.phone)) errs.push(["f-phone", "Số điện thoại chưa đúng. Ví dụ: 0912 345 678"]);
        if (!data.province.trim()) errs.push(["f-province", "Vui lòng cho biết tỉnh hoặc thành phố bạn đang sống."]);
        if (!data.callTime) errs.push(["f-callTime", "Vui lòng chọn giờ thuận tiện để nghe máy."]);
        if (!data.consent) errs.push(["f-consent", "Vui lòng đồng ý để Đơm Hoa liên hệ với bạn."]);
      }
      $$('[id$="-error"]', form).forEach((p) => showError(p.id.replace(/-error$/, ""), ""));
      errs.forEach(([id, msg]) => showError(id, msg));
      if (errs.length) {
        document.getElementById(errs[0][0])?.focus();
        return;
      }
      if (step < 2) {
        step += 1;
        render(true);
        return;
      }
      const btn = $('button[type="submit"]', form);
      sending(btn, true, "Gửi đăng ký");
      setTimeout(() => {
        const done = document.createElement("div");
        done.setAttribute("role", "status");
        done.className = "rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-12";
        done.innerHTML = `${checkIcon}<h2 tabindex="-1" class="mt-5 text-[32px] text-moss-ink outline-none">Đã nhận. Cảm ơn ${esc(
          data.fullName.trim(),
        )}.</h2><p class="mt-3 text-lg text-ink-muted">Cán bộ Đơm Hoa sẽ gọi cho bạn vào ${esc(
          data.callTime.toLowerCase(),
        )} trong vòng 2 ngày làm việc. Nếu lỡ cuộc gọi, chúng tôi sẽ gọi lại.</p><p class="mt-4 text-sm text-ink-muted">Bản xem thử: form chưa nối hệ thống nên thông tin chưa được gửi đi.</p><div class="mt-8 flex flex-wrap gap-3"><a href="hanh-trinh.html" class="${primaryBtn}">Tìm hiểu hành trình</a><a href="trang-chu.html" class="${ghostBtn}">Về trang chủ</a></div>`;
        form.replaceWith(done);
        $("h2", done).focus();
      }, 900);
    });

    render(false);
  }

  function init() {
    initHeader();
    $$("input.range").forEach(initCalculator);
    initStories();
    initPartnerForm();
    initEnquiryForm();
  }

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
