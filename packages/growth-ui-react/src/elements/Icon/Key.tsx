import React, { SVGProps } from 'react';

export default function Key(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 32 32"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      {...props}
      color={color}
    >
      <title>Key icon</title>
      <path d="M22 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-7 12v-1h2a1 1 0 0 0 1-1v-2h2a8 8 0 1 0-7.68-5.74L4.6 22a2 2 0 0 0-.6 1.41V26c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-1h2a1 1 0 0 0 1-1zm-1-12a6 6 0 1 1 6 6h-3a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v1h-2a1 1 0 0 0-1 1v2H6v-2.59l8.18-8.17a1 1 0 0 0 .22-1.07c-.26-.67-.4-1.4-.4-2.17z"></path>
    </svg>
  );
}
