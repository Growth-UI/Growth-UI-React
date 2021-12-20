export function isDecimalLimitReached(value: string, decimalsLimit = Infinity) {
  const decimals = value.split('.')[1] || '';

  return decimals.length > decimalsLimit;
}
