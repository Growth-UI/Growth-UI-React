import React, { SVGProps } from 'react';

export default function DatabaseSearch(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>DatabaseSearch icon</title>
      <path d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4zm6.33.17c.59-.3 1.17-.67 1.67-1.12v3.2a5.48 5.48 0 0 0-4.02-1.23c.86-.21 1.65-.5 2.35-.85zM11 16.5a5.5 5.5 0 0 0 3.83 5.24c-.88.17-1.83.26-2.83.26-4.42 0-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33.96 0 1.9-.08 2.78-.22A5.5 5.5 0 0 0 11 16.5zm5.5 4.5c.97 0 1.87-.3 2.6-.83l2.62 2.61a.75.75 0 1 0 1.06-1.06l-2.61-2.61A4.5 4.5 0 1 0 16.5 21zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
    </svg>
  );
}
