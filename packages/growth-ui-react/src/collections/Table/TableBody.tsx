import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledTableBody = styled.tbody<TableBodyProps>``;

const TableBody: FC<TableBodyProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableBody {...rest}>{children}</StyledTableBody>;
};

// ======================================================
export interface TableBodyProps extends StrictTableBodyProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableBodyProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default TableBody;
