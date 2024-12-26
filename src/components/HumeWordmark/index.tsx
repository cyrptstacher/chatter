'use client';
import { ComponentProps } from 'react';

export const ChatterLogo = (props: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <span className="font-bold tracking-wide">chatter</span>
    </div>
  );
};