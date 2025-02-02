import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

export const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, wrapperRef.current!);

    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div ref={wrapperRef}></div>;
};

