import CardContent from './CardContent';
import CardDescription from './CardDescription';
import CardGroup, { StyledCardGroup } from './CardGroup';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardMeta from './CardMeta';
import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCard = styled.div<CardProps>`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  width: 345px;
  min-height: 0;
  padding: 0;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  overflow: hidden;

  ${StyledCardGroup} > & {
    margin: 0.875em 0.5em;
  }
`;

const Card: FC<CardProps> & CardComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledCard {...rest}>{children}</StyledCard>;
};

Card.Content = CardContent;
Card.Description = CardDescription;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Media = CardMedia;
Card.Meta = CardMeta;

interface CardComponents {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Group: typeof CardGroup;
  Header: typeof CardHeader;
  Media: typeof CardMedia;
  Meta: typeof CardMeta;
}

// ======================================================
export interface CardProps extends StrictCardProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardProps {
  /** Additional classes. */
  className?: string;

  /** A card can be formatted to have contents appear horizontally. */
  horizontal?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Card;
