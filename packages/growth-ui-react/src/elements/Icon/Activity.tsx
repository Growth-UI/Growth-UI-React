import React, { SVGProps } from 'react';

export default function Activity(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      {...props}
      color={color}
    >
      <title>Activity icon</title>
      <g>
        <path d="M14.33 20h-.21a2 2 0 01-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 016 13H3a1 1 0 010-2h2.34l2.51-5.79a2 2 0 013.79.38L14.32 18l2.76-6.38A1 1 0 0118 11h3a1 1 0 010 2h-2.34l-2.51 5.79A2 2 0 0114.33 20z" />
      </g>
    </svg>
  );
}
