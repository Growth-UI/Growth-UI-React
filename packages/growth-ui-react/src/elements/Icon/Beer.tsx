import React, { SVGProps } from 'react';

export default function Beer(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 512 512"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Beer icon</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 200v240a40.12 40.12 0 01-40 40H136a40.12 40.12 0 01-40-40V224"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M352 224h40a56.16 56.16 0 0156 56v80a56.16 56.16 0 01-56 56h-40"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M224 256v160m64-160v160M160 256v160m160-304a48 48 0 010 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 010-96 47.91 47.91 0 0126 9"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M91.86 132.43a40 40 0 1160.46-52S160 91 160 96m-14.17-31.29C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 01-1.67 17.79"
      />
    </svg>
  );
}
