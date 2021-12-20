import { addSeparators } from './addSeparators';
import { fixedDecimalValue } from './fixedDecimalValue';
import { trimLeadingZeros } from './trimLeadingZeros';

type Options = {
  separators: boolean;
  decimalsLimit: number;
  fixed: number;
};

export function formatValue(
  value: string,
  { decimalsLimit, fixed, separators }: Options,
) {
  let formattedValue = value;

  formattedValue = trimLeadingZeros(formattedValue);

  if (separators) {
    formattedValue = addSeparators(formattedValue);
  }

  formattedValue = fixedDecimalValue(formattedValue, decimalsLimit, fixed);

  return formattedValue;
}
