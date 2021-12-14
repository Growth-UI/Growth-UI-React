import Pagination from '@growth-ui/react/modules/Pagination';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const PaginationExamplePagination = () => (
  <>
    <Pagination totalPages={10} />
    <Spacer size={15} />
    <Pagination totalPages={10} color="primary" />
    <Spacer size={15} />
    <Pagination totalPages={10} color="secondary" />
    <Spacer size={15} />
    <Pagination totalPages={10} disabled />
  </>
);

export default PaginationExamplePagination;
