import invoke from 'lodash/invoke';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { DATE_MASK } from '../../../../types';
import { maskedDateFormatter } from '../masks';
import { removeInvalidChars } from '../removeInvalidChars';

interface MaskedInputProps extends StrictMaskedInputProps {
  [k: string]: any;
}

interface StrictMaskedInputProps {
  defaultValue?: string;
  mask: DATE_MASK;
}

export function useMaskedInput(props: MaskedInputProps) {
  const { defaultValue = '', mask } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    handleChange(null, defaultValue);
  }, [defaultValue, mask]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | null, value: string) => {
    const withoutInvalidChars = removeInvalidChars(value);
    const formattedValue = maskedDateFormatter(withoutInvalidChars, mask);

    setInputValue(formattedValue);
    invoke(props, 'onChange', e, formattedValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') {
      return;
    }

    const input = inputRef.current;

    if (!input) {
      return;
    }

    const at = (input.selectionStart as number) - 1;

    if (Number.isNaN(+inputValue[at]) && input.selectionStart === input.selectionEnd) {
      input.selectionStart = at;
      input.selectionEnd = at;

      e.preventDefault();
    }
  };

  return {
    inputProps: {
      onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(e, e.currentTarget.value),
      onKeyDown: handleKeyDown,
      ref: inputRef,
      value: inputValue,
    },
    handleChange,
  };
}
