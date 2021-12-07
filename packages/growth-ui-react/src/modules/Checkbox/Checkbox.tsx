import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { COLORS } from '../../types';

export const StyledCheckbox = styled.div<CheckboxProps>`
  position: relative;
  display: flex;
  min-height: 1.5rem;
  width: fit-content;
  line-height: 17px;
  align-items: center;

  & > span {
    padding-left: 2.5rem;
  }

  & > label {
    position: absolute;
    cursor: pointer;
    min-height: 1.5rem;
  }

  & > label:after {
    position: absolute;
    content: '';
    opacity: 1;
    z-index: 2;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: 0;
    background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%), 0 0 0 1px rgb(34 36 38 / 15%) inset;
    transition: all 0.3s ease;
    ${({ radio }) => radio && 'border-radius: 100%;'}
    ${({ rounded }) => rounded && 'border-radius: 6px;'}
    ${({ checked, color, outline = true }) =>
      checked &&
      outline &&
      `
      opacity: 0.4;
      box-shadow: 0 1px 2px 0 ${color ? `var(--color-${color})` : 'var(--color-primary)'}, 0 0 0 1px ${
        color ? `var(--color-${color})` : 'var(--color-primary)'
      } inset;
    `}
  }

  & > label:before {
    position: absolute;
    display: block;
    content: '';
    color: rgba(0, 0, 0, 0.95);
    z-index: 3;
    top: 0.25rem;
    font-weight: 900;
    left: 0.25rem;
    width: 1rem;
    height: 1rem;
    ${({ radio }) => radio && 'border-radius: 100%;'}
    transform: scale(0.9);
    transition: background 0.3s ease;
    ${({ checked, color }) =>
      checked &&
      `
      background: ${color ? `var(--color-${color})` : 'var(--color-primary)'};
    `}
    ${({ rounded }) => rounded && 'border-radius: 6px;'}
  }

  ${({ checked, slider, toggle }) =>
    (slider || toggle) &&
    `
    & > span {
      padding-left: 4.5rem;
    }
    
    & > label {
      width: 3.5rem;
    }

    & > label:before {
      z-index: 1 !important;transform: ${slider ? ' translateY(-50%)' : 'none'} !important;
      border: none !important;
      left: 0 !important;
      top: ${slider ? '50%' : '0'} !important;
      box-shadow: none !important;
      width: 3.5rem !important;
      height: ${slider ? '0.214rem' : '1.5rem'} !important;
      border-radius: 500rem !important;
      ${!checked && 'background: var(--border) !important;'}
    }

    & > label:after {
      opacity: 1;
      border-radius: 500rem !important;
      ${checked && 'left: calc(100% - 1.5rem) !important;'}
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    & > label {
      opacity: 0.6 !important;
    }
  `}
`;

type State = {
  checked?: boolean;
};

const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, children, label, onChange, ...rest } = props;
  const [state, setState] = useState<State>({});

  useEffect(() => {
    setState({ checked });
  }, [checked]);

  const handleChange = (e: SyntheticEvent) => {
    const { disabled } = props;

    if (disabled) return;

    if (onChange) {
      onChange(e, { ...props, checked: !state.checked });
    }

    setState({ checked: !state.checked });
  };

  return (
    <StyledCheckbox {...rest} checked={state.checked} onClick={handleChange}>
      <label />
      <span>{label || children}</span>
    </StyledCheckbox>
  );
};

// ======================================================
export interface CheckboxProps extends StrictCheckboxProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCheckboxProps {
  /** Whether or not checkbox is checked. */
  checked?: boolean;

  /** Additional classes. */
  className?: string;

  /** A checkbox can be filled with different colors. */
  color?: COLORS;

  /** A checkbox can appear disabled and be unable to change states. */
  disabled?: boolean;

  /** The text of the associated label element. */
  label?: string;

  /** Called when the user attempts to change the Checkbox state. */
  onChange?: (event: SyntheticEvent, data: CheckboxProps) => void;

  /** Color of the border. */
  outline?: boolean;

  /** Format as a radio element. This means it is an exclusive option. */
  radio?: boolean;

  /** A checkbox may appear rounded. */
  rounded?: boolean;

  /** A Checkbox can look like a slider. */
  slider?: boolean;

  /** Custom style */
  style?: CSSProperties;

  /** Format to show an on or off choice. */
  toggle?: boolean;
}

export default Checkbox;
