import Icon from '../../elements/Icon';
import isNull from 'lodash/isNull';
import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledAccordionTitle = styled.div<AccordionTitleProps>`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 0.5em 0;
  transition: opacity 200ms ease-out;

  ${({ active, styled }) =>
    styled &&
    `
    font-weight: 600;
    opacity: ${active ? 1 : 0.6};

    &:hover {
      opacity: 1;
    }
  `}

  ${({ iconPosition = 'left' }) => {
    switch (iconPosition) {
      case 'left':
        return `
          flex-direction: row-reverse;
          justify-content: flex-end;

          .Gui-IconWrapper {
            margin-right: 10px;
          }
        `;
      case 'right':
        return `
          justify-content: space-between;
          
          .Gui-IconWrapper {
            margin-left: 10px;
          }
        `;
    }
  }}
`;

const AccordionTitle: FC<AccordionTitleProps> & AccordionTitleComponents = (props) => {
  const { active, children, content, icon, ...rest } = props;

  const renderIcon = () => {
    if (isNull(icon)) {
      return null;
    }

    return (
      <div className="Gui-IconWrapper">
        {Icon.create(icon || 'chevron down', {
          flipped: active,
          width: 20,
        })}
      </div>
    );
  };

  return (
    <StyledAccordionTitle {...rest} active={active}>
      {children || content}
      {renderIcon()}
    </StyledAccordionTitle>
  );
};

AccordionTitle.create = createShorthandFactory(AccordionTitle, (content) => ({ content }));

interface AccordionTitleComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface AccordionTitleProps extends StrictAccordionTitleProps {
  [k: string]: any;
}

// ======================================================
export interface StrictAccordionTitleProps {
  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for Icon. */
  icon?: any;

  /** Custom style */
  style?: CSSProperties;
}

export default AccordionTitle;
