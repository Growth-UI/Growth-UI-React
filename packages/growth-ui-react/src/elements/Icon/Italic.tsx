import React, { SVGProps } from 'react';

export default function Italic(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>Italic icon</title>
      <path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path>
    </svg>
  );
}
