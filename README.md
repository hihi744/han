# Đơm Hoa website

Vietnamese-language marketing site for Đơm Hoa, a microfinance organisation for women rebuilding their lives after a prison sentence. Built with Next.js 15 (App Router), Tailwind CSS 4, Motion and Phosphor icons.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero, three pillars, Gieo–Ươm–Vun–Nở journey, loan calculator, privacy promises, stories, partner teaser, FAQ |
| `/san-pham` | ReStart loan: rounds, terms, who qualifies, calculator, repayment rhythm, savings, group rules, how to apply |
| `/hanh-trinh` | The four-stage journey and Học viện Đơm Hoa modules |
| `/ve-chung-toi` | Name meaning, vision, mission, values, who we serve, legal framework |
| `/doi-tac` | “Trao cần câu, không trao con cá” project, targets, timeline, budget, sponsor packages, partner form |
| `/dang-ky` | Three-step loan enquiry form (borrower conversion) |
| `/bao-mat` | Privacy commitments (draft, needs legal review) |

## Before launch

**Content to confirm.** Copy and figures come from the organisation's planning documents and live in `src/content/site.ts`. Anything not yet final renders with a visible yellow “Cần xác nhận” tag; search the code for `<Tbc` and `tbc: true` to find them all. Contact details and the licence number are bracketed placeholders in `org` in the same file.

**Interest rate.** The calculator (`src/components/loan-calculator.tsx`) uses the 9%/year rate from the documents and labels it illustrative, because the documents say it is not yet the product price. Change `ILLUSTRATIVE_RATE` once the rate is approved. The maths is in `src/lib/loan.ts` and reproduces the documents' worked examples.

**Stories.** The testimonials in `src/components/story-rail.tsx` are samples and are labelled as such. Replace them only with stories told with the person's written consent.

**Photos.** Every image position uses `<PhotoSlot want="…">`, which shows an illustrated placeholder naming the photo it needs. Add the file under `public/` and pass `src="/photos/…"` and an `alt`. Never use photos that identify a client as formerly incarcerated without their consent.

**Forms.** Both forms are front-end only. To connect them, set `NEXT_PUBLIC_LOAN_ENQUIRY_ENDPOINT` and `NEXT_PUBLIC_PARTNER_ENQUIRY_ENDPOINT` to URLs that accept a JSON `POST`, or replace the `post` helper in `src/lib/forms.ts`. Without an endpoint, the forms simulate a successful submission.

## Design tokens

Colours, radii and the type family are defined in `src/app/globals.css` under `@theme`:

- Moss `#3B5336` for primary actions; deep moss `#243320` for dark panels.
- Mist `#F6F7F2` as the page background.
- Blossom pink `#E88B92` for shapes and for text on dark backgrounds. On light backgrounds, pink text uses `#B0505A`, because `#E88B92` doesn't meet contrast requirements there.
- Logo colours (from the brand palette): green `#0C6A3B`, sage `#7D9C65`, red `#B93636`, orange `#FF9C4C`, yellow `#FFF2A0`. They are used in the petal illustrations.

Typeface: Manrope (self-hosted via Fontsource), with full Vietnamese diacritic support.
