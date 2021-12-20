import { isNil } from './isNil';

export const addSeparators = (value: string, separator = ',') => {
  const split = value.split('.');
  const integer = split[0];
  const decimals = split[1];
  const withSeparators = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  if (!isNil(decimals)) {
    return `${withSeparators}.${decimals}`;
  }

  return withSeparators;
};
