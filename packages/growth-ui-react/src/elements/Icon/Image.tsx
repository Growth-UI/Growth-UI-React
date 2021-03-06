import React, { SVGProps } from 'react';

export default function Image(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 16 16"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Image icon</title>
      <path d="M14.998 2l.002.002v11.996l-.002.002H1.002L1 13.998V2.002L1.002 2h13.996zM15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"></path>
      <path d="M13 4.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0113 4.5zM14 13H2v-2l3.5-6 4 5h1L14 7z"></path>
    </svg>
  );
}
