import React, { SVGProps } from 'react';

export default function Package(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      color={color}
    >
      <title>PackageIcon icon</title>
      <line x1="16.5" x2="7.5" y1="9.4" y2="4.21"></line>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" x2="12" y1="22.08" y2="12"></line>
    </svg>
  );
}
