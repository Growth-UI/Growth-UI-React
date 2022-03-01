import invoke from 'lodash/invoke';
import React, { ChangeEvent, CSSProperties, FC, FocusEvent, ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { formatValue, isDecimalLimitReached, partitionInputProps, removeInvalidChars } from './utils';

const Container = styled.div<CurrencyInputProps>`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  padding: 10px;
  border: none;
  background: var(--bg);
  color: var(--text);

  &:focus-within {
    border: 1px solid #2d2d2d;
    border-radius: 8px;
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    color: var(--text);
    ${({ error }) => error && 'color: #C72830;'}
    ${({ size = 16 }) => `font-size: ${size}px;`}
  }

  ${({ fluid }) => fluid && 'width: 100%;'}

  ${({ error }) =>
    error &&
    `
    border-color: #C72830 !important;
  `}

  span {
    font-weight: 500;
    ${({ error }) => error && 'color: #C72830;'}
    ${({ size = 16 }) => `font-size: ${size * 0.7}px;`}
  }
`;

const CurrencyInput: FC<CurrencyInputProps> = (props) => {
  const [
    { defaultValue, inputStyle, value, ...htmlInputProps },
    {
      basic,
      compact,
      containerStyle,
      decimalsLimit = 2,
      fixed,
      focus,
      prefix,
      prefixStyle,
      renderInput,
      separators = true,
      ...rest
    },
  ] = partitionInputProps(props);

  const currentValue = useRef(`${value || defaultValue || ''}`);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { placeholder } = props;

    currentValue.current = `${value || defaultValue || ''}`;
    const formattedValue = formatValue(currentValue.current, {
      decimalsLimit,
      separators,
      fixed,
    });

    currentValue.current = formattedValue;
    inputRef.current!.value = formattedValue;

    if (focus) {
      inputRef.current?.focus();
    }

    resizeInputField(currentValue.current || placeholder);
  }, [defaultValue, value]);

  const resizeInputField = (value = '') => {
    if (!compact) return;

    const input = inputRef.current!;

    input.style.width = `${value.length + 1}ch`;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();

    const formattedValue = formatValue(currentValue.current, {
      decimalsLimit,
      separators,
      fixed,
    });

    resizeInputField(formattedValue);

    inputRef.current!.value = formattedValue;
    currentValue.current = formattedValue;

    invoke(props, 'onBlur', e, props);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const cleansedValue = removeInvalidChars(currentValue.current);

    inputRef.current!.value = cleansedValue;
    currentValue.current = cleansedValue;

    invoke(props, 'onFocus', e, props);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = inputRef.current!;
    const newValue = input.value;
    const curPos = input.selectionStart!;

    const cleansedValue = removeInvalidChars(newValue);

    const reachedDecimalsLimit = isDecimalLimitReached(cleansedValue, decimalsLimit);

    if (reachedDecimalsLimit) {
      input.selectionEnd = currentValue.current.length;
      input.value = currentValue.current;
      return;
    }

    input.value = cleansedValue;
    currentValue.current = cleansedValue;

    input.selectionStart = curPos;
    input.selectionEnd = curPos;

    resizeInputField(cleansedValue);
    invoke(props, 'onChange', parseFloat(removeInvalidChars(cleansedValue)), props);
  };

  const inputProps = {
    ...htmlInputProps,
    ref: inputRef,
    style: inputStyle,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  if (basic) {
    return <input {...inputProps} />;
  }

  if (renderInput) {
    return renderInput(inputProps);
  }

  return (
    <Container {...rest} style={containerStyle}>
      {prefix && <span style={prefixStyle}>{prefix}</span>}
      <input {...inputProps} />
    </Container>
  );
};

export interface CurrencyInputProps extends StrictCurrencyInputProps {
  [k: string]: any;
}

export interface StrictCurrencyInputProps {
  /** An input can be just pure html input look and feel. */
  basic?: boolean;

  /** An input can reduce its padding to fit into tighter spaces. */
  compact?: boolean;

  /** Custom container style. */
  containerStyle?: CSSProperties;

  /** Limit length of decimals allowed. */
  decimalsLimit?: number;

  /** Default value. */
  defaultValue?: number;

  /** An Input field can show the data contains errors. */
  error?: boolean;

  /** Value will always have the specified length of decimals. */
  fixed?: number;

  /** An input can take the width of its container. */
  fluid?: boolean;

  /** An input field can show a user is currently interacting with it. */
  focus?: boolean;

  /** Custom input style. */
  inputStyle?: CSSProperties;

  /** Called on blur. */
  onBlur?: (e: FocusEvent, data: CurrencyInputProps) => void;

  /** Called on change. */
  onChange?: (value: number, data: CurrencyInputProps) => void;

  /** Called on focus. */
  onFocus?: (e: FocusEvent, data: CurrencyInputProps) => void;

  /** Placeholder if no value */
  placeholder?: string;

  /** An input can be descriptive. e.g) $ */
  prefix?: string;

  /** Allows you to customize the rendered input. */
  renderInput?: (params: any) => ReactElement;

  /** An input can format number with commas as thousands separators.  */
  separators?: boolean;

  /** An input can have different sizes. */
  size?: number;

  /** An input value. */
  value?: number;
}

export default CurrencyInput;
