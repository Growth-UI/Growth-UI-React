import invoke from 'lodash/invoke';
import React, { CSSProperties, FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';
import { StyledImage } from '../Image';
import { StyledListContent } from './ListContent';

export const StyledListItem = styled.li<ListItemProps>`
  position: relative;
  transition: all 200ms ease-out;
  transition-property: background, padding-left, padding-top;
  padding: 0.5em 0;
  list-style: none;

  ${({ active }) =>
    active &&
    `
    font-weight: 700;
  `}
  /* Animated */
  ${({ animated, horizontal }) => {
    if (animated && horizontal) {
      return `
        &:hover {
          padding-top: 2% !important;
        }
      `;
    }

    if (animated) {
      return `
        &:hover {
          padding-left: 2% !important;
        }
      `;
    }
  }}
  /* Divided */
  ${({ divided, horizontal }) => {
    if (horizontal && divided) {
      return `
        &:not(:first-child) {
          border-radius: 0;
          border-left: 1px solid rgba(34,36,38,.15);
        }
      `;
    }
    if (divided) {
      return `
        border-radius: 0;
        border-bottom: 1px solid rgba(34,36,38,.15);

        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}
  /* Horizontal */
  ${({ horizontal }) =>
    horizontal &&
    `
    &:not(:first-child) {
      padding-left: 0.5em;
    }
    &:not(:last-child) {
      padding-right: 0.5em;
    }
  `}
  /* Padded */
  ${({ padded }) =>
    padded &&
    `
    padding: 0.5em;
  `}
  /* Relaxed */
  ${({ relaxed }) =>
    relaxed &&
    `
    padding: 1em;
  `}
  /* Selection */
  ${({ hoverColor, selection }) =>
    selection &&
    `
    cursor: pointer;
    &:hover {
      background: var(${hoverColor ? `--color-${hoverColor}` : '--bg-hover'});
    }
  `}
  /* VerticalAlign */
  ${({ verticalAlign }) => {
    switch (verticalAlign) {
      case 'bottom':
        return `
          svg,
          svg + ${StyledListContent},
          ${StyledListContent},
          ${StyledListContent} + ${StyledListContent},
          ${StyledImage},
          ${StyledImage} + ${StyledListContent} {
            vertical-align: bottom;
          }
        `;
      case 'top':
        return `
          svg,
          svg + ${StyledListContent},
          ${StyledListContent},
          ${StyledListContent} + ${StyledListContent},
          ${StyledImage},
          ${StyledImage} + ${StyledListContent} {
            vertical-align: top;
          }
        `;
      case 'middle':
        return `
          svg,
          svg + ${StyledListContent},
          ${StyledListContent},
          ${StyledListContent} + ${StyledListContent},
          ${StyledImage},
          ${StyledImage} + ${StyledListContent} {
            vertical-align: middle;
          }
        `;
      default:
        return `
          svg,
          svg + ${StyledListContent},
          ${StyledListContent},
          ${StyledListContent} + ${StyledListContent},
          ${StyledImage},
          ${StyledImage} + ${StyledListContent} {
            vertical-align: top;
          }
        `;
    }
  }}

  & > svg,
  & > ${StyledImage} {
    display: inline-block;
  }

  & > svg + *,
  & > ${StyledImage} + * {
    margin-left: 0.5em;
  }
`;

const ListItem: FC<ListItemProps> & ListItemComponents = (props) => {
  const { children, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    invoke(props, 'onClick', e, props);
  };

  return (
    <StyledListItem {...rest} onClick={handleClick}>
      {children}
    </StyledListItem>
  );
};

ListItem.create = createShorthandFactory(ListItem, (content) => ({ content }));

interface ListItemComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface ListItemProps extends StrictListItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListItemProps {
  /** A list item can active. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ListItem;
