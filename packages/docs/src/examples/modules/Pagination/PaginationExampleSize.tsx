import Pagination from '@growth-ui/react/modules/Pagination';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const PaginationExampleSize = () => (
  <>
    <Pagination size={16} totalPages={10} />
    <Spacer size={15} />
    <Pagination size={20} totalPages={10} color="primary" />
    <Spacer size={15} />
    <Pagination size={24} totalPages={10} color="secondary" />
    <Spacer size={15} />
    <Pagination size={30} totalPages={10} disabled />
  </>
);

export default PaginationExampleSize;
