import p5 from "p5";

type FloatingText = {
  x: number;
  y: number;
  alpha: number;
  size: number;
  isMain?: boolean;
};

export function mountNewsTitle(host: HTMLElement) {
  let texts: FloatingText[] = [];
  let startTime = 0;
  let spawned = false;

  const sketch = (p: p5) => {
    const getSize = () => ({
      w: host.clientWidth,
      h: host.clientHeight,
    });

    p.setup = () => {
      const { w, h } = getSize();
      p.createCanvas(w, h).parent(host);
      p.pixelDensity(1);

      p.textAlign(p.CENTER, p.CENTER);
      p.textFont(getComputedStyle(document.body).fontFamily);

      startTime = p.millis();

      // 中央の最初の1文字
      texts.push({
        x: w / 2,
        y: h / 2,
        alpha: 255,
        size: Math.min(w, h) * 0.18,
        isMain: true,
      });
    };

    p.draw = () => {
      p.clear();

      const elapsed = p.millis() - startTime;

      if (elapsed > 800 && !spawned) {
        spawned = true;
      }

      if (spawned && p.frameCount % 10 === 0 && texts.length < 40) {
        texts.push({
          x: p.random(p.width),
          y: p.random(p.height),
          alpha: p.random(40, 90),
          size: p.random(18, 42),
        });
      }

      texts.forEach((t) => {
        p.fill(0, t.alpha);
        p.noStroke();
        p.textSize(t.size);
        p.text("News", t.x, t.y);

        if (!t.isMain) {
          t.alpha *= 0.985;
        }
      });

      texts = texts.filter((t) => t.alpha > 2);
    };

    p.windowResized = () => {
      const { w, h } = getSize();
      p.resizeCanvas(w, h);
    };
  };

  const instance = new p5(sketch);

  return () => instance.remove();
}
