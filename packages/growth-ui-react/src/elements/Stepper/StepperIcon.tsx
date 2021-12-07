import React, { CSSProperties, FC, SVGProps } from 'react';
import styled from 'styled-components';

export const StyledStepperIcon = styled.svg<StepperIconProps>`
  user-select: none;
  fill: currentColor;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${({ active, completed }) => (active || completed ? 'var(--color-primary)' : 'var(--emphasis-secondary)')};
  display: block;

  & text {
    fill: ${({ active }) => (active ? '#fff' : 'var(--light-text)')};
    font-size: 0.75rem;
  }
`;

const StepperIcon: FC<StepperIconProps> = (props) => {
  const { completed, index } = props;

  return (
    <StyledStepperIcon {...props} focusable="false" viewBox="0 0 24 24" ariaHidden="true">
      {completed ? (
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="12"></circle>
          <text x="12" y="16" textAnchor="middle">
            {index}
          </text>
        </>
      )}
    </StyledStepperIcon>
  );
};

// ======================================================
export interface StepperIconProps extends StrictStepperIconProps, SVGProps<SVGSVGElement> {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperIconProps {
  /** Additional classes. */
  className?: string;

  /** A icon can show that a user has completed the step. */
  completed?: boolean;

  /** Numbering stepper. */
  index?: number;

  /** Custom styles. */
  style?: CSSProperties;
}

export default StepperIcon;
