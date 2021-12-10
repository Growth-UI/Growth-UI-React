import DropdownDivider from './DropdownDivider';
import DropdownItem, { DropdownItemProps, StyledDropdownItem } from './DropdownItem';
import DropdownMenu, { StyledDropdownMenu } from './DropdownMenu';
import DropdownText, { StyledDropdownText } from './DropdownText';
import EventListener from '../../addons/EventListener';
import Icon from '../../elements/Icon';
import Image, { StyledImage } from '../../elements/Image';
import invoke from 'lodash/invoke';
import React, { Children, cloneElement, createRef, FC, MouseEvent, ReactNode, useState } from 'react';
import Spacer from '../../elements/Spacer';
import styled from 'styled-components';
import { find, isNil, map } from 'lodash';
import { Ref } from '@fluentui/react-component-ref';

const renderItemContent = (item: DropdownItemProps) => {
  const { icon, image, value, text } = item;

  return (
    <>
      {image && <Image {...image} size="mini" />}
      {icon && <Icon name={icon} />}
      {text || value}
    </>
  );
};

export const StyledDropdown = styled.div<DropdownProps>`
  position: relative;
  cursor: pointer;
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};

  /* Icon */
  & > svg {
    display: inline-block;
    margin: 0 0 0 5px;
    vertical-align: middle;
  }

  /* Simple */
  ${({ simple }) =>
    simple &&
    `
    &:hover ${StyledDropdownMenu} {
      display: block !important;
    }
  `}

  & ${StyledDropdownItem} > svg,
  & ${StyledDropdownItem} > ${StyledImage},
  & ${StyledDropdownText} > svg,
  & ${StyledDropdownText} > ${StyledImage} {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.78571429rem;
  }

  /* Upward */
  ${({ upward }) =>
    upward &&
    `
    & ${StyledDropdownMenu} {
      bottom: 100%;
      top: auto;
    }
  `}
`;

const Dropdown: FC<DropdownProps> & DropdownComponents = (props) => {
  const ref = createRef<HTMLDivElement>();

  const { children, defaultValue, options, scrolling, space, text, trigger, onAddItem, ...rest } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  // ----------------------------------------
  // Getters
  // ----------------------------------------
  const getSelectedItem = () => {
    if (!isNil(text)) return;

    return find(options, ['value', value]);
  };

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // eslint-disable-next-line no-shadow
    const { simple } = props;

    invoke(props, 'onClick', e, props);

    if (!simple) {
      setOpen(!open);
    }
  };

  const handleItemClick = (e: MouseEvent<HTMLDivElement>, item: DropdownItemProps) => {
    if (isNil(item.value)) {
      return;
    }

    if (!text) e.stopPropagation();

    setValue(item.value);

    if (onAddItem) {
      onAddItem(e, item);
    }
  };

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  const closeOnDocumentClick = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------
  const renderText = () => {
    let _text = value;
    const selectedItem = getSelectedItem();

    if (selectedItem) {
      return <Dropdown.Text>{renderItemContent(selectedItem)}</Dropdown.Text>;
    }

    if (text) {
      _text = text;
    }

    return <Dropdown.Text>{_text}</Dropdown.Text>;
  };

  const renderOptions = () =>
    map(options, (opt, idx) => (
      <Dropdown.Item
        {...opt}
        active={isNil(opt.value) ? false : value === opt.value}
        key={idx}
        onClick={handleItemClick}
      />
    ));

  const renderMenu = () => {
    const { direction } = props;

    if (children) {
      const menu = Children.only(children) as any;

      return cloneElement(menu, { direction, open, scrolling });
    }

    return (
      <Dropdown.Menu direction={direction} open={open} scrolling={scrolling}>
        {renderOptions()}
      </Dropdown.Menu>
    );
  };

  return (
    <Ref innerRef={ref}>
      <StyledDropdown {...rest} onClick={handleClick}>
        {space && <Spacer size={16} />}
        {trigger || renderText()}
        <Icon name="triangle down" />

        {space && <Spacer size={16} />}
        {renderMenu()}

        {open && <EventListener name="click" listener={closeOnDocumentClick} />}
      </StyledDropdown>
    </Ref>
  );
};

Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Text = DropdownText;

interface DropdownComponents {
  Divider: typeof DropdownDivider;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
  Text: typeof DropdownText;
}

// ======================================================
export interface DropdownProps extends StrictDropdownProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDropdownProps {
  /** Additional classes. */
  className?: string;

  /** Initial value or value array if multiple. */
  defaultValue?: any;

  /** A dropdown menu can open to the left or to the right. */
  direction?: 'left' | 'center' | 'right';

  /** A dropdown can take the full width of its parent */
  fluid?: boolean;

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {MouseEvent} event - React's original MouseEvent.
   * @param {object} data - All DropdownItem props.
   */
  onAddItem?: (event: MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;

  /**
   * Called on click.
   *
   * @param {MouseEvent} event - React's original MouseEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: MouseEvent<HTMLDivElement>, data: DropdownProps) => void;

  /** Array of Dropdown.Item props e.g. `{ icon: '', value: '' }` */
  options?: DropdownItemProps[];

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean | number;

  /** A simple dropdown can open on hover. */
  simple?: boolean;

  /** A space between dropdown text and dropdown menu. */
  space?: boolean;

  /** The text displayed in the dropdown, usually for the active item. */
  text?: string;

  /** A dropdown can render a node in place of the text. */
  trigger?: JSX.Element | ReactNode;

  /** A dropdown can open its menu upward. */
  upward?: boolean;
}

export default Dropdown;
