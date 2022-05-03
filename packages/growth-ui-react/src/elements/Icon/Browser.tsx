import React, { SVGProps } from 'react';

export default function BrowserOutline(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>BrowserOutline icon</title>
      <g data-name="Layer 2">
        <g data-name="browser">
          <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H6a1 1 0 01-1-1v-7h14zM5 9V6a1 1 0 011-1h12a1 1 0 011 1v3z"></path>
          <circle cx="8" cy="7.03" r="1"></circle>
          <circle cx="12" cy="7.03" r="1"></circle>
        </g>
      </g>
    </svg>
  );
}
