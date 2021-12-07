import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledListContent = styled.div<ListContentProps>`
  display: inline-block;

  /* Floated */
  ${({ floated }) =>
    floated &&
    `
    float: ${floated};
  `};
`;

const ListContent: FC<ListContentProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledListContent {...rest}>{children}</StyledListContent>;
};

// ======================================================
export interface ListContentProps extends StrictListContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListContentProps {
  /** Additional classes. */
  className?: string;

  /** An list content can be floated left or right. */
  floated?: 'left' | 'right';

  /** Custom styles. */
  style?: CSSProperties;
}

export default ListContent;
