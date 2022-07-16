import React, { SVGProps } from 'react';

export default function Memory(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>Memory icon</title>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V5h-4V3h-2v2h-2V3H9v2H5v4H3v2h2v2H3v2h2v4h4v2h2v-2h2v2h2v-2h4v-4h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
    </svg>
  );
}
