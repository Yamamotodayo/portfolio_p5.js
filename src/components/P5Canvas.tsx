// src/components/P5Canvas.tsx
import React from 'react';
import { P5Wrapper } from './P5Wrapper';
import { sketch } from '../sketches/sketch';

export const P5Canvas: React.FC = () => {
  return <P5Wrapper sketch={sketch} />;
};

