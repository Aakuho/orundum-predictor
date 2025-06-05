// src/components/BackgroundBlock.tsx
import React from 'react';

type BackgroundBlockProps = {
  children: React.ReactNode;
};

export default function BackgroundBlock({ children }: BackgroundBlockProps) {
  return (
    <div
      className="
        min-h-screen 
        flex 
        items-center 
        justify-center 
        p-6
      "
    >
    <div
      className="
        bg-[#121212] 
        max-w-7xl
        w-full 
        p-8
        min-h-[80vh]
      "
    >
        {children}
      </div>
    </div>
  );
}
