import { ChangeEvent, FC, ReactElement } from 'react';
import { DATE_MASK } from '../../types';
import { useMaskedInput } from './utils/hooks/useMaskedInput';

const DateInput: FC<DateInputProps> = (props) => {
  const { mask = 'mm/dd/yyyy', renderInput, ...rest } = props;

  const { inputProps } = useMaskedInput({ mask, ...rest });

  return renderInput({
    ...rest,
    ...inputProps,
  });
};

export interface DateInputProps extends StrictDateInputProps {
  [k: string]: any;
}

export interface StrictDateInputProps {
  /** Additional classes. */
  className?: string;

  /** Mask (e.g. mm/yyyy or mm/dd/yyyy). */
  mask?: DATE_MASK;

  /** Called on change. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, date: string) => void;

  /** Allows you to customize the rendered input. */
  renderInput: (params: any) => ReactElement;
}

export default DateInput;
