import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledStepperDescription = styled.div<StepperDescriptionProps>`
  font-weight: 400;
  font-size: var(--text-sm);
  margin-top: 5px;
`;

const StepDescription: FC<StepperDescriptionProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledStepperDescription {...rest}>{children}</StyledStepperDescription>;
};

// ======================================================
export interface StepperDescriptionProps extends StrictStepperDescriptionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperDescriptionProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default StepDescription;
