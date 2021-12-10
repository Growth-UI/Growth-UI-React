import Paragraph, { StyledParagraph } from '../Paragraph';
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledChipDetail = styled.div<ChipDetailProps>`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 6px;
  background: rgba(0, 0, 0, 0.1);

  ${({ outlined }) => outlined && 'background: transparent;'}

  ${StyledParagraph} {
    font-weight: 500;
    opacity: 0.8;
  }
`;

const ChipDetail: FC<ChipDetailProps> = (props) => {
  const { children, text, ...rest } = props;

  return <StyledChipDetail {...rest}>{text ? Paragraph.create(text) : children}</StyledChipDetail>;
};

// ======================================================
export interface ChipDetailProps extends StrictChipDetailProps {
  [k: string]: any;
}

// ======================================================
export interface StrictChipDetailProps {
  /** The content of the component. */
  text?: string;
}

export default ChipDetail;
