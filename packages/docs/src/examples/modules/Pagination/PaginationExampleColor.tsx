import Pagination from '@growth-ui/react/modules/Pagination';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const PaginationExampleColor = () => (
  <>
    <Pagination circular color="primary" totalPages={10} />
    <Spacer size={15} />
    <Pagination totalPages={10} color="green-600" />
    <Spacer size={15} />
    <Pagination totalPages={10} color="indigo-500" />
    <Spacer size={15} />
    <Pagination totalPages={10} disabled color="red-300" />
  </>
);

export default PaginationExampleColor;
