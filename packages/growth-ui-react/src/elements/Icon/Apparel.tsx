import React, { SVGProps } from 'react';

export default function Apparel(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 20 20"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Apparel icon</title>
      <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 01-6 0z"></path>
    </svg>
  );
}
