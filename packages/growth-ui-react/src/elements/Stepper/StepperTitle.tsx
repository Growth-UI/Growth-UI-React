import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledStepperTitle = styled.div<StepperTitleProps>`
  font-size: var(--text-base);
  font-weight: 700;
`;

const StepperTitle: FC<StepperTitleProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledStepperTitle {...rest}>{children}</StyledStepperTitle>;
};

// ======================================================
export interface StepperTitleProps extends StrictStepperTitleProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperTitleProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default StepperTitle;
