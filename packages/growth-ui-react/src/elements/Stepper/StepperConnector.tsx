import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledStepperConnector = styled.div<StepperConnectorProps>`
  display: block;
  border-color: var(--border);
  flex: 1 1 auto;

  ${({ vertical }) => {
    if (vertical) {
      return `
        position: absolute;
        border-left-width: 1px;
        border-left-style: solid;
        height: calc(100% - 2.5em);
        top: 2em;
        left: 12px;
      `;
    }

    return `
      border-top-width: 1px;
      border-top-style: solid;
      margin: auto 10px;
    `;
  }}

  ${({ alternative }) =>
    alternative &&
    `
    position: absolute;
    top: 12px;
    left: calc(-50% + 20px);
    right: calc(50% + 20px);
  `}
`;

const StepperConnector: FC<StepperConnectorProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledStepperConnector {...rest}>{children}</StyledStepperConnector>;
};

// ======================================================
export interface StepperConnectorProps extends StrictStepperConnectorProps {
  [k: string]: any;
}

// ======================================================
export interface StrictStepperConnectorProps {
  /** The prop defaults to the value inherited from the parent component. */
  alternative?: boolean;

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** A connector can be displayed stacked vertically. */
  vertical?: boolean;
}

export default StepperConnector;
