// Petal geometry traced from the Đơm Hoa mark (viewBox 0 0 440 440).
// Shared by the hero illustration, the journey section and decorative accents.

export const petalPaths = {
  // bottom-left pale petal: the seed, "Gieo"
  seed: "M54 292 L186 362 Q202 371 202 390 L202 400 Q202 422 180 422 L70 422 Q42 422 42 394 L42 300 Q42 286 54 292 Z",
  // bottom-right leaf: "Ươm"
  sprout: "M386 292 L254 362 Q238 371 238 390 L238 400 Q238 422 260 422 L370 422 Q398 422 398 394 L398 300 Q398 286 386 292 Z",
  // two large leaves: "Vun"
  leafLeft:
    "M28 116 Q140 140 190 205 Q202 222 202 245 L202 330 Q202 352 182 344 L30 270 Q12 261 12 240 L12 132 Q12 114 28 116 Z",
  leafRight:
    "M412 116 Q300 140 250 205 Q238 222 238 245 L238 330 Q238 352 258 344 L410 270 Q428 261 428 240 L428 132 Q428 114 412 116 Z",
  // the bloom: "Nở"
  bloom: "M220 12 Q246 66 306 96 Q246 126 220 182 Q194 126 134 96 Q194 66 220 12 Z",
} as const;

export const stageColors = {
  onLight: {
    seed: "var(--color-petal-yellow)",
    sprout: "var(--color-leaf)",
    leafLeft: "var(--color-leaf)",
    leafRight: "var(--color-petal-orange)",
    bloom: "var(--color-petal-red)",
  },
  onDark: {
    seed: "var(--color-petal-yellow)",
    sprout: "#8db07f",
    leafLeft: "#8db07f",
    leafRight: "var(--color-petal-orange)",
    bloom: "var(--color-blossom)",
  },
} as const;

/** A single petal glyph used as a stage icon. */
export function StageGlyph({
  stage,
  className = "",
  tone = "onLight",
}: {
  stage: "gieo" | "uom" | "vun" | "no";
  className?: string;
  tone?: "onLight" | "onDark";
}) {
  const c = stageColors[tone];
  const muted = tone === "onLight" ? "var(--color-sprout-line)" : "rgba(246,247,242,0.14)";
  const order = ["gieo", "uom", "vun", "no"];
  const reached = (s: string) => order.indexOf(s) <= order.indexOf(stage);
  return (
    <svg viewBox="0 0 440 440" className={className} aria-hidden="true">
      <path d={petalPaths.seed} fill={reached("gieo") ? c.seed : muted} />
      <path d={petalPaths.sprout} fill={reached("uom") ? c.sprout : muted} />
      <path d={petalPaths.leafLeft} fill={reached("vun") ? c.leafLeft : muted} />
      <path d={petalPaths.leafRight} fill={reached("vun") ? c.leafRight : muted} />
      <path d={petalPaths.bloom} fill={reached("no") ? c.bloom : muted} />
    </svg>
  );
}
