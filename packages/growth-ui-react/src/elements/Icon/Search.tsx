import React, { SVGProps } from 'react';

export default function Search(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 50 50"
      height="30"
      width="30"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Search icon</title>
      <path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path>
      <path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></path>
    </svg>
  );
}
