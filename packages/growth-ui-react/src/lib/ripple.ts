import max from 'lodash/max';
import { COLORS } from '../types';
import { MouseEvent } from 'react';

const ripple = (e: MouseEvent<any>, color?: COLORS) => {
  if (typeof window !== 'undefined') {
    const { currentTarget } = e;

    const rippleElement = document.createElement('ripple');
    const diameter = max([currentTarget.clientWidth, currentTarget.clientHeight]);

    rippleElement.style.width = `${diameter}px`;
    rippleElement.style.height = `${diameter}px`;

    if (color) {
      rippleElement.style.background = color;
    }

    const prevRippleElement = currentTarget.getElementsByTagName('ripple')[0];

    if (prevRippleElement) {
      prevRippleElement.remove();
    }

    currentTarget.appendChild(rippleElement);
  }
};

export default ripple;
