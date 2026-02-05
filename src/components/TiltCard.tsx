import React from 'react';
import { useTilt } from '../hooks/useTilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  maxTilt = 15,
  scale = 1.02 
}) => {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({ 
    max: maxTilt, 
    scale 
  });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
