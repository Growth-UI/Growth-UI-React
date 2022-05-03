import React, { SVGProps } from 'react';

export default function VideoSecurity(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>VideoSecurity icon</title>
      <path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v6.5C2 14.55 3.46 16 5.25 16h2.24c-.08.84-.78 1.5-1.65 1.5H3.25a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3A5.75 5.75 0 0 0 12 16.25V16h1.75a3.25 3.25 0 0 0 3.23-2.93l3.88 2.32a.75.75 0 0 0 1.14-.64V4.25a.75.75 0 0 0-1.14-.64l-3.88 2.32A3.25 3.25 0 0 0 13.75 3h-8.5zM17 7.67l3.5-2.1v7.86l-3.5-2.1V7.67zM6.25 20.5H4V19h1.84c1.7 0 3.07-1.33 3.16-3h1.5v.25c0 2.35-1.9 4.25-4.25 4.25zM3.5 6.25c0-.97.78-1.75 1.75-1.75h8.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75h-8.5c-.97 0-1.75-.78-1.75-1.75v-6.5z"></path>
    </svg>
  );
}
