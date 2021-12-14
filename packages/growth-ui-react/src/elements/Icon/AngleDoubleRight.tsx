import React, { SVGProps } from 'react';

export default function AngleDoubleRight(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>AngleDoubleRight icon</title>
      <path d="M8.73 4.2a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L13.2 10 8.7 5.27a.75.75 0 0 1 .02-1.06zm-4 0a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L9.2 10 4.7 5.27a.75.75 0 0 1 .02-1.06z"></path>
    </svg>
  );
}
