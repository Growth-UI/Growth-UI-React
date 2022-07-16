import ImageListItem from './ImageListItem';
import ImageListItemBar from './ImageListItemBar';
import React, { Children, cloneElement, CSSProperties, FC, isValidElement } from 'react';
import styled from 'styled-components';

export const StyledImageList = styled.div<ImageListProps>`
  display: grid;
  grid-template-columns: repeat(${({ cols = 4 }) => cols}, 1fr);
  grid-gap: ${({ gap = 5 }) => (typeof gap === 'string' ? gap : `${gap}px`)};
  ${({ rowHeight }) =>
    rowHeight &&
    `
    max-height: ${typeof rowHeight === 'string' ? rowHeight : `${rowHeight}px`};
    overflow-y: scroll;
  `}

  ${({ responsive, theme }) =>
    Object.keys(responsive)
      .map(
        (key) => `${theme.gui.media.custom(responsive[key].breakpoint)} {
      display: flex;
      max-width: 100%;
      overflow-x: scroll;
    }`,
      )
      .join('\n')}
`;

const ImageList: FC<ImageListProps> & ImageListComponents = (props) => {
  const { children, className, fill = true, ...rest } = props;
  const classes = ['Gui-ImageList', className].join(' ');

  const newChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...child.props,
        fill,
        responsive: props.responsive,
        borderless: props.borderless,
        rounded: props.rounded,
      });
    }

    return child;
  });

  return (
    <StyledImageList {...rest} className={classes}>
      {newChildren}
    </StyledImageList>
  );
};

ImageList.Item = ImageListItem;
ImageList.ItemBar = ImageListItemBar;

// ======================================================
interface ImageListComponents {
  Item: typeof ImageListItem;
  ItemBar: typeof ImageListItemBar;
}

// ======================================================
export interface ImageListProps extends StrictImageListProps {
  [k: string]: any;
}

// ======================================================
export interface StrictImageListProps {
  /** A item may be borderless. */
  borderless?: boolean;

  /** Additional classes. */
  className?: string;

  /** Number of columns. */
  cols?: number;

  /** Fill the parent container with image. */
  fill?: boolean;

  /** The gap between items. */
  gap?: number | string;

  /** Breakpoint for slide and minimum width of its items. */
  responsive: {
    [k: string]: {
      breakpoint: number;
      min?: number;
    };
  };

  /** A item may be rounded. */
  rounded?: boolean;

  /** The height of row. */
  rowHeight?: number | string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ImageList;
