import React from 'react';

export type BackgroundType = 'space';

interface AnimatedBackgroundProps {
  type: BackgroundType;
  children: React.ReactNode;
  onChangeBackground?: (type: BackgroundType) => void;
  showControls?: boolean;
}

const backgroundClasses: Record<BackgroundType, string> = {
  'space': 'bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900'
};

export function AnimatedBackground({
  type,
  children
}: AnimatedBackgroundProps) {

  return (
    <div className={`min-h-screen relative overflow-hidden ${backgroundClasses[type]}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}