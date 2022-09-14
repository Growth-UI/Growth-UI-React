import React, { SVGProps } from 'react';

export default function FormatQuote(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="24"
      width="24"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...props}
    >
      <title>FormatQuote icon</title>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
    </svg>
  );
}
