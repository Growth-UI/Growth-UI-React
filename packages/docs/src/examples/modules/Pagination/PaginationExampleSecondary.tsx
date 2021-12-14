import Pagination from '@growth-ui/react/modules/Pagination';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const PaginationExampleSecondary = () => (
  <>
    <Pagination secondary totalPages={10} />
    <Spacer size={15} />
    <Pagination secondary totalPages={10} color="primary" />
    <Spacer size={15} />
    <Pagination secondary totalPages={10} color="secondary" />
    <Spacer size={15} />
    <Pagination secondary totalPages={10} disabled />
  </>
);

export default PaginationExampleSecondary;
