import Icon, { IconProps } from '../../elements/Icon';
import invoke from 'lodash/invoke';
import React, { CSSProperties, FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { ripple } from '../../lib';
import { StyledBadge } from '../../elements/Badge';

export const StyledIconButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  vertical-align: middle;
  background: none;
  border-radius: 500rem;
  border-color: transparent;
  padding: 4px;
  cursor: pointer;
  outline: none;

  &: hover {
    background-color: var(--icon-button-bg);
  }

  ${StyledBadge} & {
    padding: 0;
  }
`;

const IconButton: FC<IconButtonProps> = (props) => {
  const { btnStyle = {}, name, size, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    ripple(e);
    invoke(props, 'onClick', e, props);
  };

  const width = `${size || 25}px`;
  const height = `${size || 25}px`;

  return (
    <StyledIconButton onClick={handleClick} style={btnStyle}>
      <Icon name={name} width={width} height={height} {...rest} />
    </StyledIconButton>
  );
};

// ======================================================
export interface IconButtonProps extends StrictIconButtonProps {
  [k: string]: any;
}

// ======================================================
export interface StrictIconButtonProps extends IconProps {
  /** Custom styles of wrapper button. */
  btnStyle?: CSSProperties;

  /** Size of the icon. */
  size?: number;
}

export default IconButton;
