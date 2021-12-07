import Container, { StyledContainer } from '../Container';
import invoke from 'lodash/invoke';
import React, { ChangeEvent, CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { createShorthand, partitionHTMLProps } from '../../lib';

export const StyledTextArea = styled.div<TextAreaProps>`
  margin: 0;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  outline: 0;
  line-height: 1.2857;
  resize: vertical;
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `}
  ${({ error }) =>
    error &&
    `
    & ${StyledContainer},
    & ${StyledContainer}:focus-within {
      border-color: var(--color-error) !important;
    }

    & ${StyledContainer} span,
    & ${StyledContainer}:focus-within span {
      color: var(--color-error) !important;
    }
  `}
    & ${StyledContainer} {
    padding: 0.78571429em 1em;
    border: 1px solid var(--border);
    border-radius: 0.28571429rem;
    box-shadow: 0 0 0 0 transparent inset;
    transition: color 0.1s ease, border-color 0.1s ease;
    width: 100%;

    &:focus-within {
      border-color: #85b7d9;
      color: rgba(0, 0, 0, 0.8);
      box-shadow: none;
    }

    & textarea {
      color: var(--text);
      border: none;
      width: 100%;
      min-height: 50px;
      background: transparent;
      resize: none !important;
      outline: none;
      ${({ label }) =>
        label &&
        `
        padding-top: 30px;
      `}
    }

    &:focus-within > span {
      font-size: 85%;
      color: #0074de;
    }

    & span {
      position: absolute;
      display: block;
      color: var(--text);
      padding-bottom: 7px;
      transition: color, font-size 0.2s ease-in-out;
      pointer-events: none;
    }
  }
`;

const TextArea: FC<TextAreaProps> = (props) => {
  const { disabled, label } = props;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    invoke(props, 'onChange', e);
  };

  const partitionProps = () => {
    const [htmlTextAreaProps, rest] = partitionHTMLProps(props, {
      htmlProps: ['cols', 'rows', 'name', 'value', 'draggable', 'onBlur', 'placeholder', 'onBlur', 'style'],
    });

    return [
      {
        ...htmlTextAreaProps,
        disabled,
        onChange: handleChange,
      },
      rest,
    ];
  };

  const [htmlTextAreaProps, rest] = partitionProps();

  const labelElement = createShorthand('span', label);

  return (
    <StyledTextArea {...rest} disabled={disabled}>
      <Container>
        {labelElement}
        <textarea {...htmlTextAreaProps} />
      </Container>
    </StyledTextArea>
  );
};

// ======================================================
export interface TextAreaProps extends StrictTextAreaProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTextAreaProps {
  /** Additional classes. */
  className?: string;

  /** A TextArea field can show that it is disabled. */
  disabled?: boolean;

  /** A TextArea field can show the data contains errors. */
  error?: boolean;

  /** A text area can take the width of its container. */
  fluid?: boolean;

  /** The label of the text area used for layout. */
  label?: string;

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  /** The HTML TextArea placeholder. */
  placeholder?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** A TextArea value */
  value?: string;
}

export default TextArea;
