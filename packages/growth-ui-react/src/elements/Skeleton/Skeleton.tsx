import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledSkeleton = styled.div<SkeletonProps>`
  display: inline-block;
  background-color: var(--skeleton-bg);
  opacity: 0.1;
  min-width: 10px;
  min-height: 12px;
  animation: fading 1.5s infinite;

  width: ${({ width = '100%' }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height = '100%' }) => (typeof height === 'number' ? `${height}px` : height)};

  ${({ line }) => line && 'margin: 0 0 10px 10px;'}

  ${({ rounded }) => rounded && 'border-radius: 500rem;'}

  @keyframes fading {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

const Skeleton: FC<SkeletonProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledSkeleton {...rest}>{children}</StyledSkeleton>;
};

// ======================================================
export interface SkeletonProps extends StrictSkeletonProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSkeletonProps {
  /** Height of the skeleton */
  height?: string | number;

  /** A skeleton that represents lines of text. It will automatically add space between each line. */
  line?: boolean;

  /** Skeleton can be rounded shape */
  rounded?: boolean;

  /** Width of the skeleton */
  width?: string | number;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Skeleton;
