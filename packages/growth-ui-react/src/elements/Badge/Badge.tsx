import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../types';

const computeMax = (content: number, max = 99) => {
  if (content > max) {
    return `${max}+`;
  }

  return content;
};

export const StyledBadge = styled.div<BadgeProps>`
  position: relative;
  width: fit-content;
  ${({ inline }) => inline && 'display: inline-block;'}
  ${({ relaxed }) => relaxed && 'margin: 10px;'}

  &:before {
    display: flex;
    flex-flow: row wrap;
    place-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 0.75rem;
    min-width: 20px;
    padding: 0px 6px;
    height: 20px;
    border-radius: 10px;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(255, 255, 255);
    transform-origin: 100% 0%;
    background: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-primary)')};
    ${({ dot }) =>
      dot &&
      `
      content: '';
      min-width: 10px;
      padding: 0px 3px;
      height: 10px;
    `}
    ${({ content, max }) => content && `content: '${computeMax(content, max)}';`}

    ${({ direction }) => {
      switch (direction) {
        case 'bottom left':
          return `
            bottom: 0px;
            left: 0px;
            transform: scale(1) translate(-50%, 50%);
          `;
        case 'bottom right':
          return `
            bottom: 0px;
            right: 0px;
            transform: scale(1) translate(50%, 50%);
          `;
        case 'top left':
          return `
            top: 0px;
            left: 0px;
            transform: scale(1) translate(-50%, -50%);
          `;
        default:
          return `
            top: 0px;
            right: 0px;
            transform: scale(1) translate(50%, -50%);
          `;
      }
    }}
  }
`;

const Badge: FC<BadgeProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledBadge {...rest}>{children}</StyledBadge>;
};

// ======================================================
export interface BadgeProps extends StrictBadgeProps {
  [k: string]: any;
}

// ======================================================
export interface StrictBadgeProps {
  /** Additional classes. */
  className?: string;

  /** The content rendered within the badge.  */
  content?: number;

  /** The color of the badge. */
  color?: COLORS;

  /** A badge can appear to all corners. */
  direction?: 'top left' | 'top right' | 'bottom left' | 'bottom right';

  /** A badge with empty content. */
  dot?: boolean;

  /**
   * Max count to show.
   * @default 99
   */
  max?: number;

  /** A badge can be formatted to appear inline in other content. */
  inline?: boolean;

  /** A badge may preserve its vertical and horizontal gutters. */
  relaxed?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Badge;
