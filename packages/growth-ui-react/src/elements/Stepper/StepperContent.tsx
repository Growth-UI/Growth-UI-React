import React, { CSSProperties, FC, ReactNode } from 'react';
import StepperDescription from './StepperDescription';
import StepperTitle from './StepperTitle';
import styled from 'styled-components';

export const StyledStepperContent = styled.div<StepperContentProps>`
  width: max-content;
  max-width: 300px;
  overflow-wrap: break-word;
`;

const StepperContent: FC<StepperContentProps> = (props) => {
  const { children, description, title, ...rest } = props;

  if (children) {
    return <StyledStepperContent {...rest}>{children}</StyledStepperContent>;
  }

  return (
    <StyledStepperContent {...rest}>
      <StepperTitle>{title}</StepperTitle>
      <StepperDescription>{description}</StepperDescription>
    </StyledStepperContent>
  );
};

// ======================================================
export interface StepperContentProps extends StrictStepperContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperContentProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for StepperDescription. */
  description?: any;

  /** Custom styles. */
  style?: CSSProperties;

  /** Shorthand for StepperTitle. */
  title?: any;
}

export default StepperContent;
