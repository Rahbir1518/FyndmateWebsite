import { useRef, useCallback } from 'react';

interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
}

export const useTilt = (options: TiltOptions = {}) => {
  const { max = 15, scale = 1.05, speed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotateX = ((mouseY - height / 2) / height) * -max;
    const rotateY = ((mouseX - width / 2) / width) * max;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    ref.current.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
  }, [max, scale, speed]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;

    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    ref.current.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
  }, [speed]);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
  }, [speed]);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };
};

export default useTilt;
