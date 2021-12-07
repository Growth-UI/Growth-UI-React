import AccordionTitle, { AccordionTitleProps } from './AccordionTitle';
import AccortdionContent, { AccordionContentProps } from './AccordionContent';
import React, { FC, MouseEvent } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { createChildren, createShorthandFactory } from '../../lib';

export const StyledAccordionPanel = styled.div<AccordionPanelProps>`
  ${({ styled }) =>
    styled &&
    `
    padding: .75em 1em;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--border);
    }
  `}
`;

const AccordionPanel: FC<AccordionPanelProps> & AccordionPanelComponents = (props) => {
  const { active, children, content, iconPosition, styled, title } = props;

  const renderChildren = () => {
    const overrideProps = {
      active,
      iconPosition,
      styled,
    };

    if (children) {
      return createChildren(children, { overrideProps });
    }

    return (
      <>
        {AccordionTitle.create(title, { overrideProps })}
        {AccortdionContent.create(content, { overrideProps })}
      </>
    );
  };

  return <StyledAccordionPanel {...props}>{renderChildren()}</StyledAccordionPanel>;
};

AccordionPanel.create = createShorthandFactory(AccordionPanel);

interface AccordionPanelComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface AccordionPanelProps extends StrictAccordionPanelProps {
  [k: string]: any;
}

// ======================================================
export interface StrictAccordionPanelProps {
  /** Additional classes. */
  className?: string;

  /** A shorthand for Accordion.Content. */
  content?: AccordionContentProps | string;

  /** Called when a panel is clicked. */
  onClick?: (e: MouseEvent, data: AccordionPanelProps) => void;

  /** Custom style */
  style?: CSSProperties;

  /** A shorthand for Accordion.Title. */
  title?: AccordionTitleProps | string;
}

export default AccordionPanel;
