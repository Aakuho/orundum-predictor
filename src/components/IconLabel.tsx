import React from 'react';

type IconLabelProps = {
  icon: string;
  children: React.ReactNode;
};

export default function IconLabel({ icon, children }: IconLabelProps) {
  return (
    <span className="inline-flex items-center gap-1">
      <img src={icon} alt="" className="w-4 h-4" />
      {children}
    </span>
  );
}
