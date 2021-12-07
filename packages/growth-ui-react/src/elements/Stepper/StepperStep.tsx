import Icon from '../Icon';
import React, { CSSProperties, FC, ReactNode } from 'react';
import Spacer from '../Spacer';
import StepperConnector from './StepperConnector';
import StepperIcon from './StepperIcon';
import styled from 'styled-components';
import { GrowthICONS } from '../../types';

export const StyledStepperStep = styled.div<StepperStepProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  ${({ alternative, vertical }) =>
    alternative &&
    !vertical &&
    `
    flex-direction: column;
    text-align: center;
  `}

  ${({ vertical }) =>
    vertical &&
    `
    align-items: flex-start;

    &:not(:last-child) {
      padding-bottom: 40px;
    }
  `}

  & svg {
    width: 1.5em;
    min-width: 1.5em;
    height: 1.5em;
    min-height: 1.5em;
  }

  ${({ error }) =>
    error &&
    `
    color: var(--color-error);

    & svg {
      color: var(--color-error);
    }
  `}
`;

const StepperStep: FC<StepperStepProps> = (props) => {
  const { alternative, children, error, icon, index, last, vertical } = props;

  const renderConnector = () => {
    if (alternative && !vertical && index !== 1) {
      return <StepperConnector alternative={alternative} vertical={vertical} />;
    }

    if (vertical && !last) {
      return <StepperConnector vertical={vertical} />;
    }

    return null;
  };

  const renderIcon = () => {
    if (error) return <Icon name="warning" />;

    return icon ? <Icon name={icon} /> : <StepperIcon {...props} />;
  };

  const newChildren = (
    <StyledStepperStep {...props}>
      {renderConnector()}
      {renderIcon()}
      <Spacer size={15} />
      {children}
    </StyledStepperStep>
  );

  return (
    <>
      {!alternative && !vertical && index !== 1 ? (
        <>
          <StepperConnector vertical={vertical} />
          {newChildren}
        </>
      ) : (
        newChildren
      )}
    </>
  );
};

// ======================================================
export interface StepperStepProps extends StrictStepperStepProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperStepProps {
  /** A step can be highlighted as active. */
  active?: boolean;

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** A step can show that a user has completed it. */
  completed?: boolean;

  /** Shorthand for StepperDescription. */
  description?: any;

  /** A step may be formatted to display an error indicator. */
  error?: boolean;

  /** Shorthand for Icon. */
  icon?: GrowthICONS;

  /** Position of the step. */
  index?: number;

  /**
   * Indicator that the step is displayed as rendered last.
   * The prop defaults to the value inherited from the parent Stepper component.
   */
  last?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** Shorthand for StepperTitle. */
  title?: any;
}

export default StepperStep;
