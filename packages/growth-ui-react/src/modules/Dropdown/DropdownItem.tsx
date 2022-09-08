import Icon from '../../elements/Icon';
import Image, { ImageProps } from '../../elements/Image';
import invoke from 'lodash/invoke';
import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { createShorthand } from '../../lib';
import { GrowthICONS } from '../../types';

export const StyledDropdownItem = styled.div<DropdownItemProps>`
  position: relative;
  padding: 0.78571429rem 1.14285714rem !important;
  cursor: pointer;
  transition: background 0.2 ease-out;
  background: ${({ active }) => (active ? 'var(--emphasis-secondary)' : 'var(--bg)')};
  ${({ active }) => active && 'font-weight: 700;'}

  ${({ disabled }) =>
    disabled &&
    `
    cursor: default !important;
    opacity: 0.6;
  `}

  ${({ disableHover = false }) =>
    !disableHover &&
    `
    &:hover {
      background: var(--emphasis-secondary);
    }
  `}

  & > .description {
    float: right !important;
    margin: 0 0 0 1em !important;
    color: var(--light-text) !important;
    font-size: var(--text-sm) !important;
  }

  & > svg {
    width: 20px;
    height: auto;
  }
`;

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const { children, content, description, icon, image, text, value, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    invoke(props, 'onClick', e, props);
  };

  if (children) {
    return (
      <StyledDropdownItem {...rest} onClick={handleClick}>
        {children}
      </StyledDropdownItem>
    );
  }

  const descriptionElement = createShorthand('span', description, {
    className: 'description',
  });
  const textElement = createShorthand('span', content || text || value);

  return (
    <StyledDropdownItem {...rest} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {image && <Image {...image} size="mini" />}
      {descriptionElement}
      {textElement}
    </StyledDropdownItem>
  );
};

// ======================================================
export interface DropdownItemProps extends StrictDropdownItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDropdownItemProps {
  /** Style as the currently chosen item. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Additional text with less emphasis. */
  description?: string;

  /** A dropdown item can be disabled. */
  disabled?: boolean;

  /** Hover effect will be disabled. */
  disableHover?: boolean;

  /** Shorthand for Icon. */
  icon?: GrowthICONS;

  /** Shorthand for Image. */
  image?: ImageProps;

  /** Called on click. */
  onClick?: (event: MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;

  /** Display text. */
  text?: string;

  /** Stored value. */
  value?: string | number | boolean;
}

export default DropdownItem;
