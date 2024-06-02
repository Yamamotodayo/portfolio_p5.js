// src/sketches/sketch.ts
import p5 from "p5";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    p.background(255);
    for (let y = 0; y <= 1000; y += 500) {
      for (let x = 0; x <= 1000; x += 500) {
        p.noFill();
        p.stroke(255, 147, 206);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(200, 200, 200);
      }
    }
  };
};
