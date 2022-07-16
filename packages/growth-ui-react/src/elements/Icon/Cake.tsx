import React, { SVGProps } from 'react';

export default function Cake(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>Cake icon</title>
      <path d="M12 7c1.71 0 2-1.34 2-2.44 0-1.1-.74-3.06-2-3.06s-2 1.95-2 3.06c0 1.1.29 2.44 2 2.44zM3.5 10.25C3.5 9.01 4.5 8 5.75 8h12.5c1.24 0 2.25 1 2.25 2.25v.88l-3.63 2.72c-.4.3-.95.33-1.39.08l-2.04-1.2c-.9-.53-2-.5-2.88.06L8.8 13.92c-.41.27-.94.27-1.35 0l-3.95-2.5v-1.16z"></path>
      <path d="M3.5 13.19v5.31h-.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-.75V13l-2.73 2.05c-.9.67-2.1.73-3.05.17l-2.04-1.2c-.4-.24-.91-.23-1.3.03L9.6 15.18c-.9.59-2.06.59-2.97.01l-3.14-2z"></path>
    </svg>
  );
}
