import React, { FC } from 'react';
import styled from 'styled-components';
import { HeadingProps, StyledHeading } from '../Heading';
import { StyledListContent } from './ListContent';

export const StyledListHeading = styled(StyledHeading)`
  ${StyledListContent} & {
    margin-bottom: 0;
    font-size: var(--text-base);
  }
`;

const ListHeading: FC<HeadingProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledListHeading {...rest}>{children}</StyledListHeading>;
};

export default ListHeading;
