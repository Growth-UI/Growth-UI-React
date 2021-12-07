import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledTableHead = styled.thead<TableHeadProps>``;

const TableHead: FC<TableHeadProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableHead {...rest}>{children}</StyledTableHead>;
};

// ======================================================
export interface TableHeadProps extends StrictTableHeadProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableHeadProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default TableHead;
