import React, { SVGProps } from 'react';

export default function Analytics(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      {...props}
      color={color}
    >
      <title>Analytics icon</title>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
      <rect width="2" height="5" x="7" y="12"></rect>
      <rect width="2" height="10" x="15" y="7"></rect>
      <rect width="2" height="3" x="11" y="14"></rect>
      <rect width="2" height="2" x="11" y="10"></rect>
    </svg>
  );
}
