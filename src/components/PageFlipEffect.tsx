// src/components/PageFlipEffect.tsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export const PageFlipEffect: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const flipWidth = 200; // Width of the flipping area
    let angle = 0;

    useEffect(() => {
        const sketch = (p: p5) => {
            let isFlipping = true;

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL); // Enable WEBGL renderer
                p.rectMode(p.CENTER);
                p.textAlign(p.CENTER, p.CENTER); // Set text alignment to center
            };

            p.draw = () => {
                p.background(255);

                // Gradually reveal main content as the page flips
                if (angle >= Math.PI / 2) {
                    isFlipping = false;
                    onFinish();
                }

                // Draw main content if not flipping
                if (!isFlipping) {
                    p.fill(0);
                    p.textSize(32);
                    p.text('Main Content', 0, 0); // Draw main content
                }

                // Draw page flip effect
                p.fill(200);
                p.translate(-p.width / 2, -p.height / 2); // Move origin to top-left corner
                p.rotateY(angle); // Rotate around y-axis
                p.rect(0, 0, flipWidth, p.height);
                angle += 0.02;
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