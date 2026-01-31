import p5 from "p5";

let pointerX = -9999;
let pointerY = -9999;

window.addEventListener(
  "pointermove",
  (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
  },
  { passive: true },
);

window.addEventListener(
  "pointerleave",
  () => {
    pointerX = -9999;
    pointerY = -9999;
  },
  { passive: true },
);

export type RainMountOptions = {
  density?: number;
  maxShakePx?: number;
};

export function mountRain(host: HTMLElement, opts: RainMountOptions = {}) {
  const density = opts.density ?? 120;
  const maxShakePx = opts.maxShakePx ?? 18;

  let shake = 0;
  let lastX = 0,
    lastY = 0;

  const bump = (amount: number) => {
    shake = Math.min(1, shake + amount);
  };

  const onMove = (e: PointerEvent) => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    const v = Math.min(30, Math.hypot(dx, dy));
    bump(v / 120);
  };

  const onDown = () => bump(0.6);

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });

  const sketch = (p: p5) => {
    type Drop = {
      x: number;
      y: number;
      vy: number;
      len: number;
      w: number;
      drift: number;
    };

    const drops: Drop[] = [];

    const makeDrop = (): Drop => ({
      x: p.random(p.width),
      y: p.random(-p.height, 0),
      vy: p.random(6, 12),
      len: p.random(10, 22),
      w: p.random(0.6, 1.2),
      drift: p.random(-0.4, 0.4),
    });

    const fit = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight).parent(host);
      p.pixelDensity(1);
      for (let i = 0; i < density; i++) drops.push(makeDrop());
    };

    p.draw = () => {
      p.clear();
      shake *= 0.93;

      p.stroke(0, 0, 0, 120);
      p.noFill();

      const sx = (p.noise(p.frameCount * 0.01) - 0.5) * maxShakePx * shake;
      const sy =
        (p.noise(1000 + p.frameCount * 0.01) - 0.5) * maxShakePx * shake;

      const AVOID_RADIUS = 300; // ポインタの影響半径
      const AVOID_FORCE = 30; // 横にずらす最大量

      for (const d of drops) {
        let ox = 0;
        let oy = 0;

        // ポインタ回避
        if (pointerX > -1000) {
          const dx = d.x - pointerX;
          const dy = d.y - pointerY;
          const dist = Math.hypot(dx, dy);

          if (dist < AVOID_RADIUS && dist > 0.001) {
            const t = 1 - dist / AVOID_RADIUS; // 近いほど強い
            const nx = dx / dist;
            const ny = dy / dist;

            // 主に横方向へ逃がす（縦は控えめ）
            ox += nx * AVOID_FORCE * t;
            oy += ny * AVOID_FORCE * t * 0.2;
          }
        }

        const x = d.x + sx + ox;
        const y = d.y + sy + oy;

        p.strokeWeight(d.w);
        p.line(x, y, x + d.drift, y + d.len);

        d.y += d.vy;
        d.x += d.drift;

        if (d.y > p.height + 40) {
          d.y = p.random(-200, -40);
          d.x = p.random(p.width);
          d.vy = p.random(6, 12);
          d.len = p.random(10, 22);
        }
        if (d.x < -50) d.x = p.width + 50;
        if (d.x > p.width + 50) d.x = -50;
      }
    };

    p.windowResized = () => fit();
  };

  const instance = new p5(sketch);

  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerdown", onDown);
    instance.remove();
  };
}
