import React, { SVGProps } from 'react';

export default function Add(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 28 28"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Add icon</title>
      <path d="M14.5 13V3.75a.75.75 0 0 0-1.5 0V13H3.75a.75.75 0 0 0 0 1.5H13v9.25a.75.75 0 0 0 1.5 0V14.5h9.25a.75.75 0 0 0 0-1.5H14.5z"></path>
    </svg>
  );
}
