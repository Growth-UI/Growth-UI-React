import Image from '../Image';
import ListContent from './ListContent';
import ListDescription from './ListDescription';
import ListHeading from './ListHeading';
import ListItem, { StyledListItem } from './ListItem';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../types';
import { createChildren } from '../../lib';

export const StyledList = styled.ul<ListProps>`
  list-style: none;

  /* Bulleted */
  ${({ bulleted }) =>
    bulleted &&
    `
    & ul,
    & ol {
      padding: 1em 0 0 1.5em;
    }

    ${StyledListItem} {
      list-style: disc;
    }
  `}

  /* Horizontal */
  ${({ horizontal }) =>
    horizontal &&
    `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

const List: FC<ListProps> & ListComponents = (props) => {
  const { children, ...rest } = props;

  const childrenElements = createChildren(children, rest);

  return <StyledList {...rest}>{childrenElements}</StyledList>;
};

List.Content = ListContent;
List.Description = ListDescription;
List.Heading = ListHeading;
List.Image = Image;
List.Item = ListItem;
List.List = List;

// ======================================================
interface ListComponents {
  Content: typeof ListContent;
  Description: typeof ListDescription;
  Heading: typeof ListHeading;
  Image: typeof Image;
  Item: typeof ListItem;
  List: typeof List;
}

// ======================================================
export interface ListProps extends StrictListProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListProps {
  /** A list can animate to set the current item apart from the list */
  animated?: boolean;

  /** An element type to render as. */
  as?: 'ul' | 'ol';

  /** A list can mark items with a bullet. */
  bulleted?: boolean;

  /** Additional classes. */
  className?: string;

  /** A list can show divisions between content. */
  divided?: boolean;

  /** A list can be formatted to have items appear horizontally. */
  horizontal?: boolean;

  /** A list can style its items on hover. */
  hoverColor?: COLORS;

  /** A list can relax its padding to provide more negative space. */
  padded?: boolean;

  /** A list can relax its padding to provide even more negative space. */
  relaxed?: boolean;

  /** A selection list formats list items as possible choices. */
  selection?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** An element inside a item can be vertically aligned. */
  verticalAlign?: 'bottom' | 'middle' | 'top';
}

export default List;
