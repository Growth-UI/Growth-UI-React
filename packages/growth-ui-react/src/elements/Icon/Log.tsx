import React, { SVGProps } from 'react';

export default function Log(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="25"
      width="25"
      aria-hidden="true"
      role="presentation"
      {...props}
      color={color}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M8.5 4.25h-4A1.25 1.25 0 003.25 5.5v4a1.25 1.25 0 001.25 1.25h4A1.25 1.25 0 009.75 9.5v-4A1.25 1.25 0 008.5 4.25zm-.25 5h-3.5v-3.5h3.5zm.25 4h-4a1.25 1.25 0 00-1.25 1.25v4a1.25 1.25 0 001.25 1.25h4a1.25 1.25 0 001.25-1.25v-4a1.25 1.25 0 00-1.25-1.25zm-.25 5h-3.5v-3.5h3.5zM21 5.25v1.5h-9v-1.5zm-2 4.5h-7v-1.5h7zm-7 4.5h9v1.5h-9zm0 3h7v1.5h-7z"
        fill="currentColor"
      />
    </svg>
  );
}
