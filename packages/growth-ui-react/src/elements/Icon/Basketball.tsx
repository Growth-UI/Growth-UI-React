import React, { SVGProps } from 'react';

export default function Basketball(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>SportsBasketball icon</title>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M17.09 11h4.86a9.951 9.951 0 00-1.54-4.4 5.987 5.987 0 00-3.32 4.4zM6.91 11a5.987 5.987 0 00-3.32-4.4A9.951 9.951 0 002.05 11h4.86zM15.07 11a7.994 7.994 0 014.06-6A9.969 9.969 0 0013 2.05V11h2.07zM8.93 11H11V2.05A9.943 9.943 0 004.87 5a7.994 7.994 0 014.06 6zM15.07 13H13v8.95A9.943 9.943 0 0019.13 19a7.994 7.994 0 01-4.06-6zM3.59 17.4A6.029 6.029 0 006.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zM17.09 13a5.987 5.987 0 003.32 4.4 9.951 9.951 0 001.54-4.4h-4.86zM8.93 13a7.994 7.994 0 01-4.06 6A9.969 9.969 0 0011 21.95V13H8.93z"></path>
    </svg>
  );
}
