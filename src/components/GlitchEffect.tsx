// src/components/GlitchEffect.tsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export const GlitchEffect: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const dotWidth = 10; // Dot width
    const dotHeight = 20; // Dot height
    const dotSpacing = 15; // Spacing between dots
    let alpha = 255;

    useEffect(() => {
        const sketch = (p: p5) => {
            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
            };

            p.draw = () => {
                p.background(0);
                p.noStroke();

                // Draw glitch dots
                for (let x = 0; x < p.width; x += dotSpacing) {
                    for (let y = 0; y < p.height; y += dotSpacing) {
                        p.fill(p.random(100, 255), alpha); // Add alpha value for gradual fade-out
                        p.rect(x + p.random(-5, 5), y + p.random(-5, 5), dotWidth, dotHeight);
                    }
                }

                // Gradually reduce alpha for fade-out effect
                alpha -= 10;
                if (alpha <= 0) {
                    alpha = 0;
                    onFinish();
                    p.noLoop(); // Stop the draw loop
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
            };
        };

        const p5Instance = new p5(sketch, canvasRef.current!);
        return () => {
            p5Instance.remove();
        };
    }, [onFinish]);

    return <div ref={canvasRef}></div>;
};