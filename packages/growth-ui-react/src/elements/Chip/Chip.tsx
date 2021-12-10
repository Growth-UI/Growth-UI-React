import ChipDetail from './ChipDetail';
import Icon, { IconProps } from '../Icon';
import Image, { ImageProps, StyledImage } from '../Image';
import invoke from 'lodash/invoke';
import Paragraph, { StyledParagraph } from '../Paragraph';
import React, { CSSProperties, FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES } from '../../types';
import { createChildren, createShorthandFactory } from '../../lib';
import { getFontSize, getSize } from './helpers';

export const StyledChip = styled.div<ChipProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border-width: 0px;
  width: fit-content;
  background: var(--chip-bg);

  ${({ circular }) => circular && 'border-radius: 500em;'}
  ${({ color }) => color && `background: var(--color-${color});`}
  ${({ color, outlined }) =>
    outlined &&
    `
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: ${color ? `var(--color-${color})` : 'var(--border)'};
  `}

  ${StyledParagraph} {
    font-size: ${getFontSize};
    padding: 3px 10px;
    font-weight: 500;

    ${({ color }) =>
      color &&
      `
      color: white;
    `}

    ${({ outlined, color }) =>
      color &&
      outlined &&
      `
      color: var(--color-${color});
    `}
  }

  & > ${StyledImage} {
    width: ${getSize};
    height: ${getSize};
  }

  & > svg {
    margin: 0 5px;
    width: ${getFontSize};
    height: ${getFontSize};
  }
`;

const Chip: FC<ChipProps> & ChipComponents = (props) => {
  const { children, iconPosition = 'right', onRemove, ...rest } = props;

  const handleClick = (e: MouseEvent) => {
    invoke(props, 'onClick', e, props);
  };

  // ========== Render ==========
  const renderIcon = () => {
    const { icon } = props;

    if (onRemove) {
      return <Icon name="close" onClick={(e) => onRemove(e as any, props)} />;
    }

    if (!icon) {
      return null;
    }

    return <Icon {...icon} />;
  };

  const renderImage = () => {
    const { image } = props;

    if (!image) {
      return null;
    }

    return <Image {...image} />;
  };

  const renderText = () => {
    const { text } = props;

    if (!text) return null;

    return <Paragraph>{text}</Paragraph>;
  };

  const newChildren = createChildren(children, { defaultProps: rest });

  return (
    <StyledChip {...rest} onClick={handleClick}>
      {renderImage()}
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {newChildren}
      {iconPosition === 'right' && renderIcon()}
    </StyledChip>
  );
};

Chip.create = createShorthandFactory(Chip);
Chip.Detail = ChipDetail;

interface ChipComponents {
  create: ReturnType<typeof createShorthandFactory>;
  Detail: typeof ChipDetail;
}

// ======================================================
export interface ChipProps extends StrictChipProps {
  [k: string]: any;
}

// ======================================================
export interface StrictChipProps {
  /** Called upon clicking a chip. */
  onClick?: (e: MouseEvent<HTMLElement>, data: ChipProps) => void;

  /** Adds an "x" icon, called when "x" is clicked. */
  onRemove?: (e: MouseEvent<HTMLElement>, data: ChipProps) => void;

  /** Outline the chip. */
  outlined?: boolean;

  /** A chip can be circular shape. */
  circular?: boolean;

  /** A chip can have different colors */
  color?: COLORS;

  /** Shorthand for an icon. */
  icon?: IconProps;

  /** Positon of an icon. */
  iconPosition?: 'left' | 'right';

  /** Shorthand for an image. */
  image?: ImageProps;

  /** A chip can be small or large */
  size?: SIZES;

  /** Custom style. */
  style?: CSSProperties;

  /** The content of the component. */
  text?: string | boolean | number;
}

export default Chip;
