import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES } from '../../types';

export const StyledLoader = styled.div<LoaderProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  text-align: center;
  z-index: 9000;
  transform: translateX(-50%) translateY(-50%);

  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin: 0;
    left: 0;
    top: 0;
    transform: none;
  `}

  ${({ inline }) =>
    inline === 'centered' &&
    `
      display: block;
      margin-left: auto;
      margin-right: auto;
  `}

  &:before,
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    border-radius: 500rem;
    border-style: solid;
    border-width: 0.2em;
  }

  &:before {
    border-radius: 500rem;
    border-color: rgba(0, 0, 0, 0.1);
  }

  &:after {
    animation: loader ${({ indeterminate }) => (indeterminate ? 2.1 : 0.6)}s linear;
    animation-iteration-count: infinite;
    box-shadow: 0 0 0 1px transparent;
    border-color: ${({ color }) => (color ? `var(--color-${color})` : '#767676')} transparent transparent;
  }

  @keyframes loader {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'mini':
        return `
          padding-top: 1.78571429rem;
          font-size: 0.7857em;

          &:before, &:after {
            width: 1rem;
            height: 1rem;
            margin: 0 0 0 -0.65rem;
          }
        `;
      case 'tiny':
        return `
          padding-top: 1.92857143rem;
          font-size: 0.857em;

          &:before, &:after {
            width: 1.14285714rem;
            height: 1.14285714rem;
            margin: 0 0 0 -0.77142857rem;
          }
        `;
      case 'small':
        return `
          padding-top: 2.5rem;
          font-size: .92857143em;rem;

          &:before, &:after {
            width: 1.71428571rem;
            height: 1.71428571rem;
            margin: 0 0 0 -1.05714286rem;
          }
        `;
      case 'medium':
        return `
          padding-top: 3.07142857rem;
          font-size: 1rem;

          &:before, &:after {
            width: 2.28571429rem;
            height: 2.28571429rem;
            margin: 0 0 0 -1.24285714rem;
          }
        `;
      case 'large':
        return `
          padding-top: 4.21428571rem;
          font-size: 1.14285714em;

          &:before, &:after {
            width: 3.42857143rem;
            height: 3.42857143rem;
            margin: 0 0 0 -1.85428571rem;
          }
        `;
      case 'big':
        return `
          padding-top: 4.5rem;
          font-size: 1.28571429em;

          &:before, &:after {
            width: 3.71428571rem;
            height: 3.71428571rem;
            margin: 0 0 0 -2.1014286rem;
          }
        `;
      case 'huge':
        return `
          padding-top: 5.92857143rem;
          font-size: 1.42857143em;

          &:before, &:after {
            width: 4.14285714rem;
            height: 4.14285714rem;
            margin: 0 0 0 -2.27142857rem;
          }
        `;
      case 'massive':
        return `
          padding-top: 5.35714286rem;
          font-size: 1.71428571em;

          &:before, &:after {
            width: 4.57142857rem;
            height: 4.57142857rem;
            margin: 0 0 0 -2.52571429rem;
          }
        `;
      default:
        return `
          padding-top: 3.07142857rem;

          &:before, &:after {
            width: 2.28571429rem;
            height: 2.28571429rem;
            margin: 0 0 0 -1.36285714rem;
          }
        `;
    }
  }}
`;

const Loader: FC<LoaderProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledLoader {...rest}>{children}</StyledLoader>;
};

// ======================================================
export interface LoaderProps extends StrictLoaderProps {
  [k: string]: any;
}

// ======================================================
export interface StrictLoaderProps {
  /** Additional classes. */
  className?: string;

  /** The color of the component.  */
  color?: COLORS;

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate?: boolean;

  /** Loaders can appear inline with content. */
  inline?: boolean | 'centered';

  /** Custom styles. */
  style?: CSSProperties;

  /** An Loader can vary in size. */
  size?: SIZES;
}

export default Loader;
