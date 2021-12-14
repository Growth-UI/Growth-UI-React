import Form from '@growth-ui/react/collections/Form';
import Pagination from '@growth-ui/react/modules/Pagination';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const PaginationExampleCircular = () => {
  const [activePage, setActivePage] = useState('5');
  const [boundaryRange, setBoundaryRange] = useState('1');
  const [siblingRange, setSiblingRange] = useState('1');
  const [showLastButton, setShowLastButton] = useState(true);
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showEllipsis, setShowEllipsis] = useState(false);
  const [totalPages, setTotalPages] = useState('50');

  const handlePaginationChange = (e: any, { activePage }: any) => {
    setActivePage(activePage);
  };

  return (
    <>
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        siblingRange={siblingRange}
        boundaryRange={boundaryRange}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        hideEllipsis={showEllipsis}
        onPageChange={handlePaginationChange}
      />
      <Spacer size={15} />
      <Form>
        <Form.Group equal>
          <Form.Input
            label="Active page"
            name="activePage"
            value={activePage}
            onChange={(e) => {
              setActivePage(e.target.value);
            }}
          />
          <Form.Input
            label="Total pages"
            name="totalPages"
            value={totalPages}
            onChange={(e) => {
              console.log(e.target.value);
              setTotalPages(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group equal>
          <Form.Input
            label="Boundary range"
            name="boundaryRange"
            value={boundaryRange}
            onChange={(e) => {
              setBoundaryRange(e.target.value);
            }}
          />
          <Form.Input
            label="Sibling range"
            name="siblingRange"
            value={siblingRange}
            onChange={(e) => {
              setSiblingRange(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Checkbox
          checked={showFirstButton}
          onChange={() => {
            setShowFirstButton(!showFirstButton);
            setShowLastButton(!showLastButton);
          }}
        >
          Show first and last nav pages
        </Form.Checkbox>
        <Form.Checkbox
          checked={!showEllipsis}
          onChange={() => {
            setShowEllipsis(!showEllipsis);
          }}
        >
          Show ellipsis
        </Form.Checkbox>
      </Form>
    </>
  );
};

export default PaginationExampleCircular;
