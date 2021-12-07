import React, { SVGProps } from 'react';

export default function ArrowDropdown(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="15"
      width="15"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>ArrowDropDown icon</title>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M7 10l5 5 5-5z"></path>
    </svg>
  );
}
