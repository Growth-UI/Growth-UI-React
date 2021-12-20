import { DATE_MASK } from '../../../types';

export const maskedDateFormatter = (value: string, mask: DATE_MASK) => {
  const symbol = getMaskSymbol(mask);

  let symbolCount = 0;

  return value
    .split('')
    .map((char, i) => {
      if (i > mask.length - 1 - symbolCount) {
        return '';
      }

      const maskChar = mask[i + symbolCount];
      const nextMaskChar = mask[i + symbolCount + 1];

      if (maskChar === symbol && char !== symbol) {
        return '';
      }

      if (maskChar !== symbol && char === symbol) {
        return '';
      }

      if (nextMaskChar === symbol) {
        symbolCount += 1;
        return char + symbol;
      }

      return char;
    })
    .join('');
};

export const getMaskSymbol = (mask: DATE_MASK) => {
  if (mask.includes('/')) return '/';

  if (mask.includes('-')) return '-';

  return '.';
};

export const countMaskSymbol = (mask: DATE_MASK, symbol: string) => {
  return mask.split(symbol).length - 1;
};

export const masks: Record<DATE_MASK, boolean> = {
  'mm/dd/yyyy': true,
  'mm-dd-yyyy': true,
  'mm.dd.yyyy': true,
  'mm/yyyy': true,
  'mm-yyyy': true,
  'mm.yyyy': true,
  'mm/yy': true,
  'mm-yy': true,
  'mm.yy': true,
  'yyyy/mm/dd': true,
  'yyyy-mm-dd': true,
  'yyyy.mm.dd': true,
  'yyyy/mm': true,
  'yyyy-mm': true,
  'yyyy.mm': true,
  'yy/mm': true,
  'yy-mm': true,
  'yy.mm': true,
  'dd.mm.yyyy': true,
  'dd/mm/yyyy': true,
  'dd-mm-yyyy': true,
  'mm/dd': true,
  'mm-dd': true,
  'mm.dd': true,
  'dd.mm': true,
  'dd-mm': true,
  'dd/mm': true,
};
