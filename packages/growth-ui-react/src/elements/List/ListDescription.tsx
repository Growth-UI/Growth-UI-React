import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledListDescription = styled.div<ListDescriptionProps>`
  font-size: var(--text-sm);
  opacity: 0.7;
`;

const ListDescription: FC<ListDescriptionProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledListDescription {...rest}>{children}</StyledListDescription>;
};

// ======================================================
export interface ListDescriptionProps extends StrictListDescriptionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListDescriptionProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ListDescription;
