import Collapse from '../Collapse';
import invoke from 'lodash/invoke';
import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledAccordionContent = styled.div<AccordionContentProps>`
  line-height: var(--leading-normal);
`;

const AccordionContent: FC<AccordionContentProps> & AccordionContentComponents = (props) => {
  const { active, children, content, ...rest } = props;

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();

    invoke(props, 'onClick', e, props);
  };

  return (
    <Collapse expanded={active}>
      <StyledAccordionContent {...rest} onClick={handleClick}>
        {children || content}
      </StyledAccordionContent>
    </Collapse>
  );
};

AccordionContent.create = createShorthandFactory(AccordionContent, (content) => ({ content }));

interface AccordionContentComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface AccordionContentProps extends StrictAccordionContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictAccordionContentProps {
  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Custom style */
  style?: CSSProperties;
}

export default AccordionContent;
