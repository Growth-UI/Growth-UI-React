import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledDivider = styled.div<DividerProps>`
  width: 100%;
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
  font-size: 1rem;
  letter-spacing: 0.05em;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  ${({ vertical }) =>
    vertical &&
    `
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
    width: fit-content;
    height: 100%;
    line-height: 0;
    transform: translateX(-50%);
    border: none !important;

    &:before {
      position: absolute;
      left: 50%;
      top: 1rem;
      transform: translateX(-50%);
      content: '';
      width: 1px;
      height: calc(50% - 2rem);
      background: rgba(255,255,255,.1);
      border-right: 1px solid var(--border);
    }

    &:after {
      position: absolute;
      left: 50%;
      bottom: calc(100% + 1rem);
      transform: translateX(-50%);
      content: '';
      width: 1px;
      height: calc(50% - 2rem);
      background: rgba(255,255,255,.1);
      border-left: 1px solid var(--border);
    }

    & > * {
      position: absolute;
      top: -0.7rem;
      left: -0.6rem;
    }
  `}

  ${({ horizontal }) =>
    horizontal &&
    `
    display: flex;
    align-items: center;
    border: none !important;
    width: 100%;

    &:before {
      content: '';
      display: block;
      border-top: 1px solid var(--border);
      flex: 1;
      margin-right: 1rem;
    }

    &:after {
      content: '';
      display: block;
      flex: 1;
      border-top: 1px solid var(--border);
      margin-left: 1rem;
    }
  `}

  ${({ inverted }) =>
    inverted &&
    `
    color: var(--inverted-text);

    &:before,
    &:after {
      border-top: 1px solid var(--inverted-border) !important;
      border-bottom: 1px solid var(--inverted-border);
      border-left: 1px solid var(--inverted-border);
      border-right: 1px solid var(--inverted-border);
    }
  `}
`;

const Divider: FC<DividerProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledDivider {...rest}>{children}</StyledDivider>;
};

// ======================================================
export interface DividerProps extends StrictDividerProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDividerProps {
  /** Additional classes. */
  className?: string;

  /** Divider can segment content horizontally. */
  horizontal?: boolean;

  /** Divider can have its colours inverted. */
  inverted?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** Divider can segment content vertically. */
  vertical?: boolean;
}

export default Divider;
