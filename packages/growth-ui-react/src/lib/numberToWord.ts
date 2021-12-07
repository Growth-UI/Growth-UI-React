/**
 * Returns the number to pixels in string.
 * For example)
 * 5 => 5px
 * 5px => 5px
 * 5% => 5%
 * @param {string|number} value
 * @returns {string}
 */
const numberToWord = (value: string | number): string => {
  if (typeof value === 'string') return value;

  return `${value}px`;
};

export default numberToWord;
