import React, { SVGProps } from 'react';

export default function Warning(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 20 20"
      height="25"
      width="25"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Warning icon</title>
      <path d="M19.511 17.98L10.604 1.348a.697.697 0 00-1.208 0L.49 17.98a.675.675 0 00.005.68c.125.211.352.34.598.34h17.814a.694.694 0 00.598-.34.677.677 0 00.006-.68zM11 17H9v-2h2v2zm0-3.5H9V7h2v6.5z"></path>
    </svg>
  );
}
