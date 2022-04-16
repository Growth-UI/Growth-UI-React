import React, { SVGProps } from 'react';

export default function ChatHelp(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      {...props}
      color={color}
    >
      <title>ChatHelp icon</title>
      <path d="M12 2a10 10 0 1 1-4.59 18.89L3.6 21.96a1.25 1.25 0 0 1-1.54-1.54l1.06-3.83A10 10 0 0 1 12 2zm0 1.5a8.5 8.5 0 0 0-7.43 12.64l.15.27-1.1 3.98 3.98-1.11.27.15A8.5 8.5 0 1 0 12 3.5zm0 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-8.75a2.75 2.75 0 0 1 2.75 2.75c0 1.01-.3 1.57-1.05 2.36l-.17.17c-.62.62-.78.89-.78 1.47a.75.75 0 0 1-1.5 0c0-1.01.3-1.57 1.05-2.36l.17-.17c.62-.62.78-.89.78-1.47a1.25 1.25 0 0 0-2.5-.13v.13a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 6.75z"></path>
    </svg>
  );
}
