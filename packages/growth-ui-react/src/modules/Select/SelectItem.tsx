import Paragraph from '../../elements/Paragraph';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';
import Icon, { IconProps } from '../../elements/Icon';
import { ImageProps } from '../../elements/Image';
import { invoke } from 'lodash';

export const StyledSelectItem = styled.div<SelectItemProps>`
  position: relative;
  border-top: 1px solid var(--border);
  padding: 0.78571429rem 1.14285714rem !important;
  color: var(--text);
  transition: background 300ms, font-weight 300ms;
  width: 100%;

  ${({ active, selected }) =>
    (active || selected) &&
    `
    font-weight: 500;
    background: var(--bg-hover);
  `}

  &:hover {
    background: var(--bg-hover);
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: default !important;
    opacity: 0.6;
  `}
`;

const SelectItem: FC<SelectItemProps> & SelectItemComponents = (props) => {
  const { children, content, icon, image, text, ...rest } = props;

  const handleClick = (e: MouseEvent) => {
    invoke(props, 'onClick', e, props);
  };

  const renderIcon = () => {
    if (icon) {
      return <Icon {...icon} />;
    }
  };

  if (children) {
    return (
      <StyledSelectItem {...rest} onClick={handleClick}>
        {renderIcon()}
        {children}
      </StyledSelectItem>
    );
  }

  const element = content || Paragraph.create(text);

  return (
    <StyledSelectItem {...rest} onClick={handleClick}>
      {element}
    </StyledSelectItem>
  );
};

SelectItem.create = createShorthandFactory(SelectItem);

interface SelectItemComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface SelectItemProps extends StrictSelectItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSelectItemProps {
  /** Style as the currently chosen item. */
  active?: boolean;

  /** Primary content */
  content?: ReactNode;

  /** A select item can be disabled. */
  disabled?: boolean;

  /** Shorthand for Icon. */
  icon?: IconProps;

  /** Shorthand for Image. */
  image?: ImageProps;

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Stored text. */
  text?: boolean | number | string;

  /** Unique indentity for the item. */
  value?: string | number;
}

export default SelectItem;
