import p5 from "p5";

type Letter = {
  ch: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  lineIndex: number;
};

export type AboutTitleOptions = {
  line1?: string; // "石蹴り遊びは"
  line2?: string; // "楽しいフォークバンドです"
  strokeAlpha?: number; // 0-255
  fontSize?: number;
  fontFamily?: string; // globalと揃える
};

function pickPrimaryFontFamily(bodyFontFamily: string) {
  const first = bodyFontFamily.split(",")[0]?.trim() ?? "";
  return first.replace(/^['"]|['"]$/g, "");
}

export function mountAboutTitle(
  host: HTMLElement,
  opts: AboutTitleOptions = {},
) {
  const line1 = opts.line1 ?? "石蹴り遊びは";
  const line2 = opts.line2 ?? "楽しいフォークバンドです";

  const strokeAlpha = opts.strokeAlpha ?? 150;
  let baseFontSize = opts.fontSize ?? 42;

  const bodyFontFamily = getComputedStyle(document.body).fontFamily;
  const fontFamily = opts.fontFamily ?? pickPrimaryFontFamily(bodyFontFamily);

  let pointerX = -9999;
  let pointerY = -9999;

  let lastPX = 0;
  let lastPY = 0;
  let pvx = 0;
  let pvy = 0;

  const toLocal = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onMove = (e: PointerEvent) => {
    const p = toLocal(e);
    pointerX = p.x;
    pointerY = p.y;

    pvx = pointerX - lastPX;
    pvy = pointerY - lastPY;
    lastPX = pointerX;
    lastPY = pointerY;
  };

  const onLeave = () => {
    pointerX = -9999;
    pointerY = -9999;
    pvx = 0;
    pvy = 0;
  };

  host.addEventListener("pointermove", onMove, { passive: true });
  host.addEventListener("pointerleave", onLeave, { passive: true });

  const sketch = (p: p5) => {
    let letters: Letter[] = [];

    const getCanvasSize = () => {
      const w = Math.max(1, Math.floor(host.clientWidth));
      const h = Math.max(1, Math.floor(host.clientHeight));
      return { w, h };
    };

    const chooseFontSize = (w: number) => {
      if (w < 520) return 30;
      if (w < 820) return 36;
      return baseFontSize;
    };

    const lineHeight = (fs: number) => Math.floor(fs * 1.25);

    const buildLineCentered = (text: string, y: number, lineIndex: number) => {
      const lineW = p.textWidth(text);
      let x = (p.width - lineW) / 2;

      for (const ch of text.split("")) {
        const cw = p.textWidth(ch);
        const h = p.textAscent() + p.textDescent();
        letters.push({
          ch,
          x,
          y,
          vx: 0,
          vy: 0,
          w: cw,
          h,
          lineIndex,
        });
        x += cw;
      }
    };

    const layout = () => {
      letters = [];

      const fs = chooseFontSize(p.width);
      p.textSize(fs);
      p.textStyle(p.NORMAL);

      p.textFont(fontFamily);

      const lh = lineHeight(fs);

      const top = Math.max(44, Math.floor(p.height * 0.45 - lh));

      buildLineCentered(line1, top, 0);
      buildLineCentered(line2, top + lh, 1);
    };

    const isHover = (L: Letter, px: number, py: number) => {
      const x0 = L.x;
      const y0 = L.y - L.h;
      const x1 = L.x + L.w;
      const y1 = L.y + p.textDescent();
      return px >= x0 && px <= x1 && py >= y0 && py <= y1;
    };

    p.setup = () => {
      const s = getCanvasSize();
      p.createCanvas(s.w, s.h).parent(host);
      p.pixelDensity(1);
      p.clear();
      layout();
    };

    p.draw = () => {
      p.clear();
      p.stroke(0, 0, 0, strokeAlpha);
      p.strokeWeight(1.2);

      const friction = 0.88;

      const hasPointer = pointerX > -1000;

      pvx *= 0.8;
      pvy *= 0.8;

      for (const L of letters) {
        if (hasPointer && isHover(L, pointerX, pointerY)) {

          const k = 0.22;
          L.vx += pvx * k;
          L.vy += pvy * k;

          const cx = L.x + L.w * 0.5;
          const cy = L.y - L.h * 0.5;
          const dx = cx - pointerX;
          const dy = cy - pointerY;
          const d = Math.max(1, Math.hypot(dx, dy));
          const repel = 12 / d;
          L.vx += (dx / d) * repel;
          L.vy += (dy / d) * repel;
        }


        L.vx *= friction;
        L.vy *= friction;

        L.x += L.vx;
        L.y += L.vy;

        p.text(L.ch, L.x, L.y);
      }
    };

    p.windowResized = () => {
      const s = getCanvasSize();
      p.resizeCanvas(s.w, s.h);
      layout();
    };
  };

  const instance = new p5(sketch);

  return () => {
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    instance.remove();
  };
}
