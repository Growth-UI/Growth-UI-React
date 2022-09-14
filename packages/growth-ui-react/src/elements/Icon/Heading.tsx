import React, { SVGProps } from 'react';

export default function Heading(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...props}
    >
      <title>Heading icon</title>
      <path d="M18 20V4h-3v6H9V4H6v16h3v-7h6v7z"></path>
    </svg>
  );
}
