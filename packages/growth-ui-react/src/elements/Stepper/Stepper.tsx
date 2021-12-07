import React, { Children, cloneElement, CSSProperties, FC, isValidElement, ReactNode } from 'react';
import StepperContent from './StepperContent';
import StepperDescription from './StepperDescription';
import StepperStep from './StepperStep';
import StepperTitle from './StepperTitle';
import styled from 'styled-components';

export const StyledStepper = styled.div<StepperProps>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${({ vertical }) => (vertical ? 'fit-content' : '100%')};

  ${({ alternative, vertical }) => alternative && !vertical && 'align-items: flex-start;'}
`;

const Stepper: FC<StepperProps> & StepperComponents = (props) => {
  const { children, ...rest } = props;

  const renderSteps = () => {
    const { alternative, vertical } = rest;
    const childrenArray = Children.toArray(children).filter(Boolean);

    return childrenArray.map((step, index) => {
      if (isValidElement(step)) {
        return cloneElement(step, {
          alternative,
          index: index + 1,
          last: index + 1 === childrenArray.length,
          vertical,
          ...step.props,
        });
      }

      return null;
    });
  };

  return <StyledStepper {...rest}>{renderSteps()}</StyledStepper>;
};

Stepper.Content = StepperContent;
Stepper.Description = StepperDescription;
Stepper.Step = StepperStep;
Stepper.Title = StepperTitle;

interface StepperComponents {
  Content: typeof StepperContent;
  Description: typeof StepperDescription;
  Step: typeof StepperStep;
  Title: typeof StepperTitle;
}
// ======================================================
export interface StepperProps extends StrictStepperProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperProps {
  /** Content can be placed below the step icon */
  alternative?: boolean;

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** A step can be displayed stacked vertically. */
  vertical?: boolean;
}

export default Stepper;
