import React, { Children, cloneElement, CSSProperties, FC, isValidElement, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledFormGroup = styled.div<FormGroupProps>`
  display: flex;
  align-items: flex-start;
  flex-wrap: ${({ unstackable }) => (unstackable ? 'no-wrap' : 'wrap')};

  ${({ equal = true }) =>
    equal &&
    `
    & > * {
      flex: 1 1 auto;
    }
  `}
`;

const FormGroup: FC<FormGroupProps> = (props) => {
  const { children, size, ...rest } = props;

  const newChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        size,
      });
    }

    return child;
  });

  return <StyledFormGroup {...rest}>{newChildren}</StyledFormGroup>;
};

// ======================================================
export interface FormGroupProps extends StrictFormGroupProps {
  [k: string]: any;
}

// ======================================================
export interface StrictFormGroupProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Divide fields to be equal width */
  equal?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A form group can prevent itself from stacking on mobile. */
  unstackable?: boolean;
}

export default FormGroup;
