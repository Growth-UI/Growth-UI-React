import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Ref } from '@fluentui/react-component-ref';
import { SIZES } from '../../types';
import { StyledCardContent } from '../../views/Card';

export const StyledImage = styled.img<ImageProps>`
  position: relative;
  display: block;
  max-width: 100%;
  background-color: transparent;
  transition: 0.3s filter linear;

  ${StyledCardContent} > & {
    display: inline-block;
    vertical-align: middle;
  }

  ${({ avatar }) =>
    avatar &&
    `
    display: inline-block;
    vertical-align: middle;
    border-radius: 500rem;
  `}

  ${({ floated }) =>
    floated &&
    `
    float: ${floated};
  `}

  ${({ hidden }) =>
    hidden &&
    `
    opacity: 0;
    position: fixed;
    z-index: -1;
  `}
  ${({ bordered }) => bordered && 'border: 1px solid var(--border);'}
  ${({ rounded }) => rounded && 'border-radius: 8px;'}
  ${({ circular }) => circular && 'border-radius: 500rem;'}

  ${({ centered }) =>
    centered &&
    `
    margin-left: auto;
    margin-right: auto;
  `}

  ${({ size }) => {
    switch (size) {
      case 'mini':
        return `
          width: 35px;
          height: auto;
          font-size: .78571429rem;
        `;
      case 'tiny':
        return `
          width: 80px;
          height: auto;
          font-size: .85714286rem;
        `;
      case 'small':
        return `
          width: 150px;
          height: auto;
          font-size: .92857143rem;
        `;
      case 'medium':
        return `
          width: 300px;
          height: auto;
          font-size: 1rem;
        `;
      case 'large':
        return `
          width: 450px;
          height: auto;
          font-size: 1.14285714rem;
        `;
      case 'big':
        return `
          width: 600px;
          height: auto;
          font-size: 1.28571429rem;
        `;
      case 'huge':
        return `
          width: 800px;
          height: auto;
          font-size: 1.42857143rem;
        `;
      case 'massive':
        return `
          width: 960px;
          height: auto;
          font-size: 1.71428571rem;
        `;
    }
  }}
`;

const Image: FC<ImageProps> = (props) => {
  const { lazy = true, src, ...rest } = props;
  const [loading, setLoading] = useState(lazy);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          setLoading(false);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
      },
    );

    const _ref = ref.current;

    if (_ref && lazy) {
      observer.observe(_ref);

      return () => observer.unobserve(_ref);
    }
  }, []);

  return (
    <Ref innerRef={ref}>
      <StyledImage {...rest} src={loading ? '' : src} />
    </Ref>
  );
};

export interface ImageProps extends StrictImageProps {
  [k: string]: any;
}

export interface StrictImageProps {
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar?: boolean;

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered?: boolean;

  /** An image can appear centered in a content block. */
  centered?: boolean;

  /** An image may appear circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** An image can sit to the left or right of other content. */
  floated?: 'left' | 'right';

  /** An image can be hidden. */
  hidden?: boolean;

  /** An image can be lazy-loaded. */
  lazy?: boolean;

  /** An image may appear rounded. */
  rounded?: boolean;

  /** An image may appear at different sizes. */
  size?: SIZES;

  /** Additional styles */
  style?: CSSProperties;
}

export default Image;
