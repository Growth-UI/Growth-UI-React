import Icon from '../../../elements/Icon';
import max from 'lodash/max';
import min from 'lodash/min';

export const createEllipsisItem = (pageNumber: number) => {
  return {
    active: false,
    type: 'ellipsisItem',
    value: pageNumber,
    content: '…',
  };
};

export const createPrevItem = (activePage: number) => {
  return {
    active: false,
    type: 'prevItem',
    content: Icon.create('chevron left'),
    value: max([activePage - 1, 1]),
  };
};

export const createNextItem = (activePage: number, totalPages: number) => {
  return {
    active: false,
    type: 'nextItem',
    content: Icon.create('chevron right'),
    value: min([activePage + 1, totalPages]),
  };
};

export const createFirstPage = () => {
  return {
    active: false,
    type: 'firstItem',
    value: 1,
    content: Icon.create('angle double left'),
  };
};

export const createLastPage = (totalPages: number) => {
  return {
    active: false,
    type: 'lastItem',
    value: totalPages,
    content: Icon.create('angle double right'),
  };
};

export const createEllipsis = () => {
  return {
    active: false,
    type: 'ellipsis',
  };
};

export const createPageItemFactory = (activePage: number) => {
  return (pageNumber: number) => ({
    active: activePage === pageNumber,
    type: 'pageItem',
    value: pageNumber,
  });
};
