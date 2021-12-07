import React, { SVGProps } from 'react';

export default function Airplane(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>Airplane icon</title>
      <path d="M21.99 11.95a2 2 0 0 1-2.05 1.99l-4.74-.14-3.45 7.14c-.28.57-.86.94-1.5.94a.93.93 0 0 1-.92-1.04l.86-7.19-3.76-.1-.5 1.33c-.18.51-.66.85-1.2.85a.9.9 0 0 1-.9-.9v-1.48L3 13.18a1.26 1.26 0 0 1 0-2.47l.82-.17V9.07a.9.9 0 0 1 .78-.9h.12c.54 0 1.02.33 1.2.84l.5 1.34 3.75-.1-.85-7.1v-.1c0-.51.4-.93.92-.93.58 0 1.12.3 1.42.8l.08.14 3.4 7.04 4.79-.14a2 2 0 0 1 2.05 1.93v.06z"></path>
    </svg>
  );
}
