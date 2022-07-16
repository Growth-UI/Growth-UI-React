import React, { Children, cloneElement, CSSProperties, FC, isValidElement } from 'react';
import styled from 'styled-components';

export const StyledImageListItem = styled.div<ImageListItemProps>`
  ${({ fill }) =>
    fill &&
    `
    & > img {
      width: 100%;
    }
  `}

  ${({ rounded = true }) =>
    rounded &&
    `
    & > img {
      border-radius: 16px;
    }
    `}

  ${({ borderless = false, responsive, theme }) => `
    ${Object.keys(responsive)
      .map(
        (key) => `${theme.gui.media.custom(responsive[key].breakpoint)} {
        min-width: ${responsive[key].min}px;
        overflow: hidden;
        border-radius: 16px;
        ${!borderless && 'box-shadow: inset 0 0 0 1px #e4e4e4;'}

        & > img {
          border-radius: 0;
        }
      }`,
      )
      .join('\n')}
  `}
`;

const ImageListItem: FC<ImageListItemProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = ['Gui-ImageListItem', className].join(' ');

  const newChildren = Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...child.props,
        responsive: props.responsive,
        position: idx === 0 ? 'top' : 'bottom',
      });
    }

    return child;
  });

  return (
    <StyledImageListItem {...rest} className={classes}>
      {newChildren}
    </StyledImageListItem>
  );
};

// ======================================================
export interface ImageListItemProps extends StrictImageListItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictImageListItemProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ImageListItem;
