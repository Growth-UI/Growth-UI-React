import Grid, { StyledGridCol } from '../Grid';
import Image from '../../elements/Image';
import Paragraph from '../../elements/Paragraph';
import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledImageListItemBar = styled.div<ImageListItemBarProps>`
  position: relative;

  ${StyledGridCol} {
    padding: 12px;
  }

  ${({ responsive, theme, position = 'bottom' }) => `
    ${Object.keys(responsive)
      .map(
        (key) => `${theme.gui.media.custom(responsive[key].breakpoint)} {
        img {
          position: absolute;
          left: 12px;
          z-index: 10;
          ${position === 'bottom' ? 'top: -25px;' : 'bottom: -25px;'}
        }

        img ~ ${StyledGridCol} {
          padding: ${position === 'bottom' ? '35px 12px 12px' : '12px 12px 35px'};
        }
      }`,
      )
      .join('\n')}
  `}
`;

const ImageListItemBar: FC<ImageListItemBarProps> = (props) => {
  const { children, className, subtitle, thumbnail, title, ...rest } = props;
  const classes = ['Gui-ImageListItemBar', className].join(' ');

  return (
    <StyledImageListItemBar {...rest} className={classes}>
      {children || (
        <>
          <Grid.Row verticalAlign="middle">
            {thumbnail && (
              <Image rounded src={thumbnail} style={{ width: '50px', height: '50px', margin: '5px 10px 5px 0' }} />
            )}
            {(title || subtitle) && (
              <Grid.Col>
                {title && <Paragraph fontWeight={600}>{title}</Paragraph>}
                {subtitle && <Paragraph fontSize={14}>{subtitle}</Paragraph>}
              </Grid.Col>
            )}
          </Grid.Row>
        </>
      )}
    </StyledImageListItemBar>
  );
};

// ======================================================
export interface ImageListItemBarProps extends StrictImageListItemBarProps {
  [k: string]: any;
}

// ======================================================
export interface StrictImageListItemBarProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** String or element serving as subtitle (support text). */
  subtitle?: ReactNode;

  /** Thumbnail image. */
  thumbnail?: string;

  /** Title to be displayed. */
  title?: ReactNode;
}

export default ImageListItemBar;
