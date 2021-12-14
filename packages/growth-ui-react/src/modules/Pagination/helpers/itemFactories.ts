import Icon from '../../../elements/Icon';

export function createEllipsisItem(pageNumber: number) {
  return {
    active: false,
    type: 'ellipsisItem',
    value: pageNumber,
    content: '…',
  };
}

export function createPrevItem(activePage: number) {
  return {
    active: false,
    type: 'prevItem',
    content: Icon.create('chevron left'),
    value: Math.max(1, activePage - 1),
  };
}

export function createNextItem(activePage: number, totalPages: number) {
  return {
    active: false,
    type: 'nextItem',
    content: Icon.create('chevron right'),
    value: Math.min(activePage + 1, totalPages),
  };
}

export function createFirstPage() {
  return {
    active: false,
    type: 'firstItem',
    value: 1,
    content: Icon.create('angle double left'),
  };
}

export function createLastPage(totalPages: number) {
  return {
    active: false,
    type: 'lastItem',
    value: totalPages,
    content: Icon.create('angle double right'),
  };
}

export function createEllipsis() {
  return {
    active: false,
    type: 'ellipsis',
  };
}

export function createPageItemFactory(activePage: number) {
  return (pageNumber: number) => ({
    active: activePage === pageNumber,
    type: 'pageItem',
    value: pageNumber,
  });
}
