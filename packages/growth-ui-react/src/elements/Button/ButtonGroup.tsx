import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { SIZES } from '../../types';

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: inline-flex;
  flex-direction: row;
  margin: 0 0.25em 0 0;
  border: 1px solid ${({ borderless }) => (borderless ? 'transparent' : 'rgba(34, 36, 38, 0.15)')};
  border-radius: ${({ rounded }) => (rounded ? '16px' : '0.28571429rem')};
  box-shadow: none;
  overflow: hidden;

  /* Fluid */
  ${(props) => props.fluid && 'width: 100%;'};

  & > button {
    flex: 1;
    margin: 0 !important;
    border-radius: 0em !important;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset !important;

    /* Size */
    font-size: ${({ size }) => {
      switch (size) {
        case 'mini':
          return '.78571429rem;';
        case 'tiny':
          return '.85714286rem;';
        case 'small':
          return '.92857143rem;';
        case 'medium':
          return '1rem;';
        case 'large':
          return '1.14285714rem;';
        case 'big':
          return '1.28571429rem;';
        case 'huge':
          return '1.42857143rem;';
        case 'massive':
          return '1.71428571rem;';
        default:
          return '1rem;';
      }
    }} !important;
  }
`;

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>;
};

export interface ButtonGroupProps extends StrictButtonGroupProps {
  [k: string]: any;
}

export interface StrictButtonGroupProps {
  /** A button group may be borderless. */
  borderless?: boolean;

  /** Additional classes. */
  className?: string;

  /** A button group can take the width of its container. */
  fluid?: boolean;

  /** Round border. */
  rounded?: boolean;

  /** A button group can have different sizes. */
  size?: SIZES;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ButtonGroup;
