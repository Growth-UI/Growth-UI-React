import invoke from 'lodash/invoke';
import isEmpty from 'lodash/isEmpty';
import React, { ChangeEvent, ClipboardEvent, CSSProperties, FC, KeyboardEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import { SIZES } from '../../types';

const rectSize = ({ size }: SplitInputProps) => {
  switch (size) {
    case 'mini':
      return 'width: 30px; height: 35px; font-size: var(--text-xs);';
    case 'tiny':
      return 'width: 40px; height: 46.5px; font-size: var(--text-sm);';
    case 'small':
      return 'width: 50px; height: 58.227845px; font-size: var(--text-base);';
    case 'medium':
      return 'width: 60px; height: 69.873414px; font-size: var(--text-lg);';
    case 'large':
      return 'width: 70px; height: 81.518983px; font-size: var(--text-xl);';
    case 'big':
      return 'width: 79px; height: 92px; font-size: var(--text-2xl);';
    case 'huge':
      return 'width: 90px; height: 104.810121px; font-size: var(--text-3xl);';
    case 'massive':
      return 'width: 100px; height: 116.45569px; font-size: var(--text-4xl);';
    default:
      return 'width: 60px; height: 69.873414px; font-size: var(--text-base);';
  }
};

const Container = styled.fieldset<SplitInputProps>`
  display: flex;
  border: none;
  width: fit-content;

  ${({ center }) => center && 'margin: 0 auto;'}
  margin-top: 0.25em;
  margin-bottom: 0.25em;

  & > input {
    ${rectSize}
    line-height: 56px;
    outline: 0;
    border: 1px solid var(--border);
    text-align: center;
    background: none;
    color: var(--color);
    transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
    box-shadow: none;
  }

  & > input:not(:first-child) {
    border-left: none;
  }

  & > input:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & > input:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const SplitInput: FC<SplitInputProps> = (props) => {
  const { containerStyle, inputStyle, num, onEnd, ...rest } = props;
  const [value, setValue] = useState<string[]>(Array(num).fill(''));
  const ref = useRef<HTMLInputElement[] | null[]>([]);

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, curIndex: number) => {
    const v = value[curIndex];
    const k = e.key;
    const prevIndex = curIndex > 0 ? curIndex - 1 : 0;

    if (isEmpty(v) && k === 'Backspace') {
      return ref.current[prevIndex]?.focus();
    }

    if (k === 'ArrowLeft') {
      return ref.current[prevIndex]?.focus();
    }

    const nextIndex = curIndex < value.length - 1 ? curIndex + 1 : value.length - 1;

    if (k === 'ArrowRight') {
      return ref.current[nextIndex]?.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = [...value];
    const cursorPos = ref.current[index]?.selectionStart;

    newValue[index] = cursorPos === 1 ? e.target.value.slice(0, 1) : e.target.value.slice(-1);
    setValue(newValue);

    invoke(props, 'onChange', e, { ...props, value: newValue });

    if (e.target.value !== '') {
      ref.current[index + 1]?.focus();
    }
    /** If all input is not provided, onEnd will not be called. */
    if (newValue.some((v) => v === '')) {
      return;
    }

    ref.current[num - 1]?.focus();

    if (onEnd) {
      onEnd(e, { ...props, value: newValue, setValue });
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();

    const newValue = [...value];
    const pastedValue = e.clipboardData.getData('text').split('');

    let j = 0;

    for (let i = index; i < Math.min(pastedValue.length, newValue.length); i++) {
      newValue[i] = pastedValue[j++];
    }

    invoke(props, 'onChange', e, { ...props, value: newValue });
    setValue(newValue);

    /** If all input is not provided, onEnd will not be called. */
    if (newValue.some((v) => v === '')) {
      return;
    }

    if (onEnd) {
      onEnd(e as any, { ...props, value: newValue, setValue });
    }
  };

  return (
    <Container {...rest} style={containerStyle}>
      {times(num).map((_, index) => (
        <input
          key={index}
          maxLength={2}
          style={inputStyle}
          ref={(el) => {
            ref.current[index] = el;
          }}
          value={value[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          onPaste={(e) => handlePaste(e, index)}
        />
      ))}
    </Container>
  );
};

export interface SplitInputProps extends StrictSplitInputProps {
  [k: string]: any;
}

export interface StrictSplitInputProps {
  /** An input can be centered. */
  center?: boolean;

  /** Additional className. */
  className?: string;

  /** Custom container style. */
  containerStyle?: CSSProperties;

  /** Custom input style. */
  inputStyle?: CSSProperties;

  /** Number of input item. */
  num: number;

  /** Called on change. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, data: SplitInputProps & { value: string[] }) => void;

  /** Called once all input fields filled. */
  onEnd?: (
    e: ChangeEvent<HTMLInputElement>,
    data: SplitInputProps & { value: string[]; setValue: React.Dispatch<React.SetStateAction<string[]>> },
  ) => void;

  /** An Input can vary in size. */
  size?: SIZES;
}

export default SplitInput;
