import React, { SVGProps } from 'react';

export default function Security(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>Security icon</title>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 .31.01.61.04.91.36 4.49 3.37 8.55 7.4 9.84.37.12.77.12 1.13 0 4.03-1.29 7.03-5.35 7.4-9.84.02-.3.04-.6.04-.91v-4.7a2 2 0 00-1.3-1.87l-6-2.25a1.96 1.96 0 00-1.41-.01zm.7 17.66V12H6.05c-.03-.3-.05-.6-.05-.91v-4.7l6-2.25V12h5.95c-.35 3.64-2.76 6.88-5.95 7.92z"></path>
    </svg>
  );
}
