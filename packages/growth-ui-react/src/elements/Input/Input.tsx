import Icon from '../Icon';
import invoke from 'lodash/invoke';
import React, { ChangeEvent, CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { FONTSIZES, GrowthICONS } from '../../types';
import { partitionHTMLProps } from '../../lib';
import { StyledAccordionContent } from '../../modules/Accordion';

const DURATION = 200;

export const Adornment = styled.span<{ error?: boolean }>`
  opacity: 0.6;
  padding-right: 5px;
  ${({ error }) =>
    error &&
    `
    color: var(--color-error);
    opacity: 1;
  `}
`;

export const Feedback = styled.span`
  padding-left: 5px;
  color: var(--color-error);
  font-size: var(--text-sm);
`;

export const Label = styled.span`
  position: absolute;
  left: 0.5em;
  bottom: 50%;
  transform: translateY(50%);
  color: var(--light-text);
  padding: 0 5px;
  width: calc(100% - 1em);
  transition: font-size ${DURATION}ms, bottom ${DURATION}ms, color ${DURATION}ms ease-out;
  background: inherit;
  pointer-events: none;
`;

export const StyledInput = styled.div<InputProps>`
  --filled: rgba(0, 0, 0, 0.09);

  @media (prefers-color-scheme: dark) {
    --filled: rgba(255, 255, 255, 0.09);
  }

  position: relative;
  padding: 0.75em 0.5em;
  width: 100%;
  border-radius: 0.28571429rem;
  border: 1px solid var(--border);
  transition: border-color ${DURATION}ms ease-out;
  font-size: ${({ size }) => (size ? `var(--text-${size})` : 'var(--text-base)')};

  & > div {
    display: flex;
    align-items: center;
    background: ${({ filled }) => (filled ? 'transparent' : 'var(--bg)')};
  }

  &:focus-within {
    border-color: var(--color-blue-400);
  }

  & svg {
    width: ${({ size }) => (size ? `calc(var(--text-${size}) * 1.5)` : 'calc(var(--text-base) * 1.5)')};
    height: auto;
  }

  & input {
    width: 100%;
    height: 100%;
    font-size: 100%;
    border: none;
    color: var(--text);
    background: transparent;
    outline: 0;
  }

  & input::placeholder {
    opacity: 0.5;
  }

  & input:focus ~ ${Label}, & input:placeholder-shown ~ ${Label}, & input:valid ~ ${Label} {
    width: fit-content;
    font-size: 85%;
    bottom: calc(100% - 0.5em);
    transform: translateY(0);
  }

  & input:focus ~ ${Label} {
    color: var(--color-blue-400);
  }

  /* Filled */
  ${({ filled }) =>
    filled &&
    `
    background: var(--filled);
    border: none !important;
    
    & input,
    & svg {
      padding-top: 0.5em;
    }
    & input:focus ~ ${Label}, 
    & input:placeholder-shown ~ ${Label}, 
    & input:valid ~ ${Label} {
      bottom: calc(100% - 1.5em);
      font-size: 77%;
    }
  `}

  /* Hold label in place when adorment or icon is passed. */
  ${({ filled, adornment, icon }) =>
    filled &&
    (adornment || icon) &&
    `
    & ${Label} {
      font-size: 77%;
      bottom: calc(100% - 1.5em);
      transform: translateY(0);
      width: fit-content;
    }
  `}

  ${({ adornment, icon }) =>
    (adornment || icon) &&
    `
    & ${Label} {
      font-size: 77%;
      bottom: calc(100% - 0.5em);
      transform: translateY(0);
      width: fit-content;
    }
  `}

  /* Basic */
  ${({ basic }) =>
    basic &&
    `
    border: none;
    border-bottom: 1px solid var(--border);
    border-radius: 0px;
    padding-left: 0;

    & ${Label} {
      width: 100%;
      left: 0;
      padding: 0;
    }
  `}

  ${({ error }) => error && 'border-color: var(--color-error) !important;'}
  ${({ error }) =>
    error &&
    `
    & input, 
    & input::placeholder {
      color: var(--color-error) !important;
    }
  `}

  ${({ error }) => error && `& ${Label} { color: var(--color-error) !important; }`}

  /* Disabled */
  ${({ disabled }) =>
    disabled &&
    `
    & ${Label} {
      color: var(--light-text);
    }
  `}
`;

export const Wrapper = styled.div<{ fluid?: boolean }>`
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};

  ${StyledAccordionContent} & {
    margin-top: 10px;
  }
`;

const Input: FC<InputProps> = (props) => {
  const {
    children,
    label,
    disabled,
    feedback,
    fluid,
    iconPosition = 'left',
    required,
    type,
    style,
    ...unhandled
  } = props;

  const inputProps = () => {
    const [htmlInputProps, rest] = partitionHTMLProps(unhandled);

    return [
      {
        ...htmlInputProps,
        disabled,
        type,
        onChange: handleChange,
      },
      rest,
    ];
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    invoke(props, 'onChange', e, props);
  };

  // =========== Renderer =============
  const renderAdornment = () => {
    const { adornment, error } = props;

    if (!adornment) return null;

    return <Adornment error={error}>{adornment}</Adornment>;
  };

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Label>
        {label}
        {required && <span style={{ paddingLeft: '0.1em' }}>*</span>}
      </Label>
    );
  };

  const renderFeedback = () => {
    if (!feedback) return null;

    return <Feedback>{feedback}</Feedback>;
  };

  const renderIcon = () => {
    const { icon } = props;

    if (!icon) return null;

    const iconStyle: Record<string, any> = {
      pointerEvents: 'none',
    };

    if (iconPosition === 'left') iconStyle.paddingRight = '5px';
    else iconStyle.paddingLeft = '5px';

    return <Icon name={icon} style={iconStyle} />;
  };

  const [htmlInputProps, rest] = inputProps();

  return (
    <Wrapper fluid={fluid} style={style}>
      <StyledInput {...rest}>
        <div>
          {iconPosition === 'left' && renderIcon()}
          {renderAdornment()}
          {children || <input {...htmlInputProps} required formNoValidate />}
          {iconPosition === 'right' && renderIcon()}
          {renderLabel()}
        </div>
      </StyledInput>
      {renderFeedback()}
    </Wrapper>
  );
};

// ======================================================
export interface InputProps extends StrictInputProps {
  [k: string]: any;
}

// ======================================================
export interface StrictInputProps {
  /** This can be used to add a prefix, a suffix or an action to an element. */
  adornment?: any;

  /** Basic looking. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** An Input field can show that it is disabled. */
  disabled?: boolean;

  /** An Input field can show th  e data contains errors. */
  error?: boolean;

  /** Feedback to the user about the error. */
  feedback?: string;

  /** An Input's background can be filled.  */
  filled?: boolean;

  /** Take on the size of its container. */
  fluid?: boolean;

  /** Optional Icon to display inside the Input. */
  icon?: GrowthICONS;

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition?: 'left' | 'right';

  /** The label of the input used for layout. */
  label?: any;

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, data: InputProps) => void;

  /** The HTML input placeholder. */
  placeholder?: string;

  /** A field can show that input is mandatory. */
  required?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** An Input can vary in size. */
  size?: FONTSIZES;

  /** The HTML input type. */
  type?: string;

  /** The input value */
  value?: any;
}

export default Input;
