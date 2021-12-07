import React, { SVGProps } from 'react';

export default function PriceTag(props: SVGProps<SVGSVGElement>): JSX.Element {
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
      <title>PriceTag icon</title>
      <path d="M19.388.405a.605.605 0 00-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 00-1.097.338L.729 12.157a1.01 1.01 0 00-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133zm-4.371 9.358a1.608 1.608 0 01-2.24-.396 1.614 1.614 0 01.395-2.246 1.607 1.607 0 011.868.017c-.272.164-.459.26-.494.275a.606.606 0 00.259 1.153c.086 0 .174-.02.257-.059.194-.092.402-.201.619-.33a1.615 1.615 0 01-.664 1.586z"></path>
    </svg>
  );
}
