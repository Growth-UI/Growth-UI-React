import max from 'lodash/max';
import min from 'lodash/min';
import range from 'lodash/range';
import { createInnerPrefix, createInnerSuffix } from './suffixFactories';

export function createSimpleRange(startPage: number, totalPages: number, pageItemFactory: (pageNumber: number) => any) {
  return range(startPage, totalPages + 1).map(pageItemFactory);
}

export function createComplexRange(options: any, pageItemFactory: (pageNumber: number) => any) {
  const { activePage, boundaryRange, hideEllipsis, siblingRange, totalPages } = options;

  const ellipsisSize = hideEllipsis ? 0 : 1;
  const firstGroupEnd = boundaryRange;
  const firstGroup = createSimpleRange(1, firstGroupEnd, pageItemFactory);

  const lastGroupStart = totalPages + 1 - boundaryRange;
  const lastGroup = createSimpleRange(lastGroupStart, totalPages, pageItemFactory);

  const innerGroupStart = min([
    max([activePage - siblingRange, firstGroupEnd + ellipsisSize + 1]),
    lastGroupStart - ellipsisSize - 2 * siblingRange - 1,
  ]);
  const innerGroupEnd = innerGroupStart + 2 * siblingRange;
  const innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageItemFactory);

  return [
    ...firstGroup,
    !hideEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageItemFactory),
    ...innerGroup,
    !hideEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageItemFactory),
    ...lastGroup,
  ].filter(Boolean);
}
