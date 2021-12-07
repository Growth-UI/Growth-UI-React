import ButtonGroup from './ButtonGroup';
import Icon from '../Icon';
import invoke from 'lodash/invoke';
import React, { CSSProperties, FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { COLORS, GrowthICONS, SIZES } from '../../types';
import { ripple } from '../../lib';

export const StyledButton = styled.button<Omit<ButtonProps, 'loading'> & { loading?: string }>`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  text-align: center !important;
  text-decoration: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  overflow: hidden;

  & > svg {
    margin-right: 10px;
  }

  /* Active */
  ${({ active }) =>
    active &&
    `
    background-color: #c0c1c2;
    box-shadow: 0 0 0 1px transparent inset;
    color: rgba(0,0,0,.95);
  `}

  &:hover {
    background-color: #c0c1c2;
  }

  /* Color */
  ${({ color }) =>
    color &&
    `
    background: var(--color-${color}) !important;

    & > * {
      color: #fff !important;
    }
  `}

  /* Size */
  ${({ size }) => {
    switch (size) {
      case 'mini':
        return `
          font-size: .78571429rem;

          & > svg {
            width: .78571429rem;
            height: auto;
          }
        `;
      case 'tiny':
        return `
          font-size: .85714286rem;

          & > svg {
            width: .85714286rem;
            height: auto;
          }
        `;
      case 'small':
        return `
          font-size: .92857143rem;

          & > svg {
            width: .92857143rem;
            height: auto;
          }
        `;
      case 'medium':
        return `
          font-size: 1rem;

          & > svg {
            width: 1rem;
            height: auto;
          }
        `;
      case 'large':
        return `
          font-size: 1.14285714rem;

          & > svg {
            width: 1.14285714rem;
            height: auto;
          }
        `;
      case 'big':
        return `
          font-size: 1.28571429rem;

          & > svg {
            width: 1.28571429rem;
            height: auto;
          }
        `;
      case 'huge':
        return `
          font-size: 1.42857143rem;

          & > svg {
            width: 1.42857143rem;
            height: auto;
          }
        `;
      case 'massive':
        return `
          font-size: 1.71428571rem;

          & > svg {
            width: 1.71428571rem;
            height: auto;
          }
        `;
      default:
        return `
          font-size: 1rem;

          & > svg {
            width: 1rem;
            height: auto;
          }
        `;
    }
  }}

  /* Fluid */
  ${(props) => props.fluid && 'width: 100%;'}

  /* Rounded */
  border-radius: ${(props) => (props.rounded ? '50rem' : '0.28571429rem')};

  /* Disabled */
  ${(props) =>
    props.disabled &&
    `
    &,
    &:hover {
      cursor: default;
      opacity: 0.45 !important;
      background-image: none !important;
      box-shadow: none !important;
      pointer-events: none !important;
    }
  `}

  /* Loading */ 
  ${(props) =>
    props.loading === 'true' &&
    `
    position: relative;
    cursor: default;
    text-shadow: none !important;
    color: transparent !important;
    opacity: 1 !important;
    pointer-events: auto;
    transition: all 0s linear, opacity 0.1s ease;

    &:before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.28571429em;
      height: 1.28571429em;
      border-radius: 500rem;
      border: 0.2em solid rgba(0, 0, 0, 0.15);  
    }

    &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      margin: -0.80285714em 0em 0em -0.80285714em;
      width: 1.28571429em;
      height: 1.28571429em;
      animation: button-spin 0.6s linear;
      animation-iteration-count: infinite;
      border-radius: 500rem;
      border-color: #ffffff transparent transparent !important;;
      border-style: solid;
      border-width: 0.2em;
      box-shadow: 0px 0px 0px 1px transparent;  
    }

    @keyframes button-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;

export const StyledBasicButton = styled(StyledButton)`
  background: #ffffff none !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: normal !important;
  text-transform: none !important;
  text-shadow: none !important !important;
  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset !important;

  /* Loading */
  ${(props) =>
    props.loading === 'true' &&
    `
    color: transparent !important;
    
    &:before {
      background: #ffffff;
      border-color: rgba(0, 0, 0, 0.1) !important;
    }

    &:after {
      box-shadow: 0px 0px 0px 1px transparent;
      border-top-color: #767676 !important;
    }
  `}

  /* Active */
  ${({ active }) =>
    active &&
    `
    background-color: #eaecec !important;
  `}

  &:hover {
    background-color: #eaecec !important;
    box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  }

  /* Color */
  ${({ color }) =>
    color &&
    `
    box-shadow: 0px 0px 0px 1px var(--color-${color}) inset !important;
    color: var(--color-${color}) !important;

    &:hover {
      background: #ffffff none !important;
    }
  `}

  /* Borderless */
  ${({ borderless }) =>
    borderless &&
    `
    border: none !important;
    box-shadow: none !important;
  `}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: #2185d0 !important;
  color: #ffffff;
  text-shadow: none !important;
  background-image: none !important;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset !important;

  &:hover {
    background-color: #1678c2 !important;
    color: #ffffff;
    text-shadow: none !important;
  }

  & > * {
    color: #fff !important;
  }

  /* Active */
  ${({ active }) =>
    active &&
    `
    background-color: #1678c2 !important;
  `}
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: #1b1c1d !important;
  color: #ffffff;
  text-shadow: none !important;
  background-image: none !important;
  box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset !important;

  /* Active */
  ${({ active }) =>
    active &&
    `
    background-color: #27292a !important;
  `}

  &:hover {
    background-color: #27292a !important;
    color: #ffffff;
    text-shadow: none !important;
  }
`;

const handleStyledComponent = ({ basic, primary, secondary }: ButtonProps) => {
  if (basic) return StyledBasicButton;
  if (primary) return StyledPrimaryButton;
  if (secondary) return StyledSecondaryButton;

  return StyledButton;
};

const Button: FC<ButtonProps> & ButtonComponents = (props) => {
  const { children, disabled, icon, loading } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    ripple(e);
    invoke(props, 'onClick', e, props);
  };

  const Component = handleStyledComponent(props);

  return (
    <Component {...props} loading={loading ? 'true' : 'false'} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {children}
    </Component>
  );
};

Button.Group = ButtonGroup;

export interface ButtonComponents {
  Group: typeof ButtonGroup;
}

export interface ButtonProps extends StrictButtonProps {
  [k: string]: any;
}

export interface StrictButtonProps {
  /** A button can show it is currently the active user selection. */
  active?: boolean;

  /** A basic button is less pronounced. */
  basic?: boolean;

  /** A button may be borderless. */
  borderless?: boolean;

  /** Additional classes. */
  className?: string;

  /** A button can have different colors */
  color?: COLORS;

  /** A button can show it is currently unable to be interacted with. */
  disabled?: boolean;

  /** A button can take the width of its container. */
  fluid?: boolean;

  /** Shorthand for Icon. */
  icon?: GrowthICONS;

  /** A button can show a loading indicator. */
  loading?: boolean;

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>, data: ButtonProps) => any;

  /** A button can be formatted to show different levels of emphasis. */
  primary?: boolean;

  /** A button can be rounded shape. */
  rounded?: boolean;

  /** A button can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** A button can have different sizes. */
  size?: SIZES;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Button;
