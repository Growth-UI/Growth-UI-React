import React, { SVGProps } from 'react';

export default function Install(props: SVGProps<SVGSVGElement>): JSX.Element {
  const color = props.color ? `var(--color-${props.color})` : 'var(--icon-color)';

  return (
    <svg
      viewBox="0 0 20 20"
      height="20"
      width="20"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color={color}
    >
      <title>Install icon</title>
      <path d="M19.059 10.898l-3.171-7.927A1.543 1.543 0 0014.454 2H12.02l.38 4.065h2.7L10 10.293 4.9 6.065h2.7L7.98 2H5.546c-.632 0-1.2.384-1.434.971L.941 10.898a4.25 4.25 0 00-.246 2.272l.59 3.539A1.544 1.544 0 002.808 18h14.383c.755 0 1.399-.546 1.523-1.291l.59-3.539a4.22 4.22 0 00-.245-2.272zm-2.1 4.347a.902.902 0 01-.891.755H3.932a.902.902 0 01-.891-.755l-.365-2.193A.902.902 0 013.567 12h12.867c.558 0 .983.501.891 1.052l-.366 2.193z"></path>
    </svg>
  );
}
