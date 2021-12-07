import React, { SVGProps } from 'react';

export default function ShoppingBag(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      color={color}
    >
      <title>ShoppingBag icon</title>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
      <line x1="3" x2="21" y1="6" y2="6"></line>
      <path d="M16 10a4 4 0 01-8 0"></path>
    </svg>
  );
}
