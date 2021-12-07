import { MouseEvent } from 'react';
import { COLORS } from '../types';

const ripple = (e: MouseEvent<any>, color?: COLORS) => {
  if (typeof window !== 'undefined') {
    const { currentTarget } = e;

    const rippleElement = document.createElement('ripple');
    const diameter = Math.max(currentTarget.clientWidth, currentTarget.clientHeight);

    rippleElement.style.width = `${diameter}px`;
    rippleElement.style.height = `${diameter}px`;
    rippleElement.style.background = color ? `var(--color-${color})` : 'rgba(255, 255, 255, 0.6)';

    const prevRippleElement = currentTarget.getElementsByTagName('ripple')[0];

    if (prevRippleElement) {
      prevRippleElement.remove();
    }

    currentTarget.appendChild(rippleElement);
  }
};

export default ripple;
