import React, { SVGProps } from 'react';

export default function Bank(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 48 48"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Bank icon</title>
      <path d="M24 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1.35-9.55c-.8-.6-1.9-.6-2.7 0L6.71 16.35a1.75 1.75 0 0 0 1.05 3.15H9v12c-1.77.85-3 2.66-3 4.75v3.5c0 .69.56 1.25 1.25 1.25h33.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-2.1-1.23-3.9-3-4.74v-12h1.24c1.69 0 2.4-2.15 1.05-3.16L25.35 4.45zM36.5 31H32V19.5h4.5V31zm-7 0h-4.25V19.5h4.25V31zm-6.75 0H18.5V19.5h4.25V31zM16 31h-4.5V19.5H16V31zm-5.99-14L24 6.56 37.99 17H10zM8.5 36.25a2.75 2.75 0 0 1 2.75-2.75h25.5a2.75 2.75 0 0 1 2.75 2.75v2.25h-31v-2.25z"></path>
    </svg>
  );
}
