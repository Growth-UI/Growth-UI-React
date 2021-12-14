import without from 'lodash/without';
import { createComplexRange, createSimpleRange } from './rangeFactories';
import {
  createFirstPage,
  createLastPage,
  createNextItem,
  createPageItemFactory,
  createPrevItem,
} from './itemFactories';

type Options = {
  activePage: number | string;
  totalPages: number | string;
  siblingRange: number | string;
  boundaryRange: number | string;
  showFirstButton: boolean;
  showLastButton: boolean;
  hideEllipsis?: boolean;
};

export function createPaginationItems(options: Options) {
  const typifiedOptions = typifyOptions(options);
  const { activePage, totalPages, showFirstButton, showLastButton, hideEllipsis, siblingRange, boundaryRange } =
    typifiedOptions;

  const pageItemFactory = createPageItemFactory(activePage);

  const innerRange = isSimplePagination({ siblingRange, boundaryRange, totalPages, hideEllipsis })
    ? createSimpleRange(1, totalPages, pageItemFactory)
    : createComplexRange(typifiedOptions, pageItemFactory);

  const items = [
    showFirstButton && createFirstPage(),
    createPrevItem(activePage),
    ...innerRange,
    createNextItem(activePage, totalPages),
    showLastButton && createLastPage(totalPages),
  ];

  return without(items, false);
}

export function isSimplePagination({ boundaryRange, hideEllipsis, siblingRange, totalPages }: any) {
  const boundaryRangeSize = 2 * boundaryRange;
  const ellipsisSize = hideEllipsis ? 0 : 2;
  const siblingRangeSize = 2 * siblingRange;

  return 1 + ellipsisSize + siblingRangeSize + boundaryRangeSize >= totalPages;
}

export const typifyOptions = ({
  activePage,
  showFirstButton,
  showLastButton,
  boundaryRange,
  hideEllipsis,
  siblingRange,
  totalPages,
}: any) => ({
  activePage: +activePage,
  boundaryRange: +boundaryRange,
  hideEllipsis: !!hideEllipsis,
  siblingRange: +siblingRange,
  totalPages: +totalPages,
  showFirstButton: !!showFirstButton,
  showLastButton: !!showLastButton,
});
