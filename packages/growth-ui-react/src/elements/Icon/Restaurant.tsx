import React, { SVGProps } from 'react';

export default function Restaurant(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Restaurant icon</title>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M14 7v5c0 1.1.9 2 2 2h1v7c0 .55.45 1 1 1s1-.45 1-1V2c-2.76 0-5 2.24-5 5zM10 9H9V3c0-.55-.45-1-1-1s-1 .45-1 1v6H6V3c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.86 1.28 3.41 3 3.86V21c0 .55.45 1 1 1s1-.45 1-1v-8.14c1.72-.45 3-2 3-3.86V3c0-.55-.45-1-1-1s-1 .45-1 1v6z"></path>
    </svg>
  );
}
