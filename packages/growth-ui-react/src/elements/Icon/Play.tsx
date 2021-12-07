import React, { SVGProps } from 'react';

export default function Play(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 48 48"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Play icon</title>
      <path d="m16.75 8.41 24.42 12.7a3.25 3.25 0 0 1 0 5.77l-24.42 12.7A3.25 3.25 0 0 1 12 36.7V11.3a3.25 3.25 0 0 1 4.55-2.98l.2.1z"></path>
    </svg>
  );
}
