import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background: #f9fafb;
`;

const TableFooter: FC<TableFooterProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableFooter {...rest}>{children}</StyledTableFooter>;
};

// ======================================================
export interface TableFooterProps extends StrictTableFooterProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableFooterProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default TableFooter;
