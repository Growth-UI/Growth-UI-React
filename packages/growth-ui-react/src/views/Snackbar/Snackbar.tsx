import Grid from '../../collections/Grid';
import Icon, { IconProps } from '../../elements/Icon';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import Spacer from '../../elements/Spacer';
import styled from 'styled-components';
import { COLORS, POSITIONS } from '../../types';
import { createShorthand, useTimeout } from '../../lib';

export const StyledSnackbar = styled.div<SnackbarProps>`
  padding: 1em 1.5em;
  background-color: #f8f8f9;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(34 36 38 / 22%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 4px;
  width: 288px;
  margin: 1em 0;
  transition: all 100ms ease-in-out;

  ${({ autoHideDuration, open }) =>
    autoHideDuration &&
    !open &&
    `
    opacity: 0;
    transform: scale(0);
  `}

  ${({ position }) =>
    position &&
    `
    position: fixed;
    z-index: 1993;
  `}

  ${({ fluid }) =>
    fluid &&
    `
    width: 100%;
  `}

  ${({ position }) => {
    switch (position) {
      case 'bottom center':
        return `
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom left':
        return `
          bottom: 10px;
          left: 10px;
        `;
      case 'bottom right':
        return `
          bottom: 10px;
          right: 10px;
        `;
      case 'left center':
        return `
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right center':
        return `
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'top center':
        return `
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'top left':
        return `
          top: 10px;
          left: 10px;
        `;
      case 'top right':
        return `
          top: 10px;
          right: 10px;
        `;
    }
  }}

  ${({ color }) =>
    color &&
    `
    color: var(--color-white);
    background-color: var(--color-${color});
  `}

  ${({ basic }) =>
    basic &&
    `
    box-shadow: 0 0 0 1px rgb(34 36 38 / 22%) inset, 0 0 0 0 transparent;
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: var(--color-white);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    background-color: rgb(50, 50, 50);
  `}

  ${({ error }) =>
    error &&
    `
    background-color: #fff6f6;
    color: #9f3a38;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, #e0b4b4 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  `}

  ${({ info }) =>
    info &&
    `
    background-color: #f8ffff;
    color: #276f86;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, #a9d5de 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  `}

  ${({ success }) =>
    success &&
    `
    background-color: #fcfff5;
    color: #2c662d;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, #a3c293 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  `}

  ${({ warning }) =>
    warning &&
    `
    background-color: #fffaf3;
    color: #573a08;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, #c9ba9b 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  `}

  ${({ theme }) => theme.gui.media.minimobile} {
    width: 95%;
    margin: 1em auto;
  }

  h3 {
    margin-bottom: 0.5em;
  }
`;

const Snackbar: FC<SnackbarProps> = (props) => {
  const { autoHideDuration, children, header, icon, message, open = true, onClose, ...rest } = props;
  const [_open, setOpen] = useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleClose = () => {
    setOpen(false);

    if (onClose) {
      onClose({ ...props, open: false });
    }
  };

  useTimeout(handleClose, autoHideDuration);

  const renderShortHand = () => {
    if (icon) {
      return (
        <Grid.Row verticalAlign="middle">
          <Icon {...icon} />
          <Spacer size={15} />
          <div>
            {headerElement}
            {message}
          </div>
        </Grid.Row>
      );
    }

    return (
      <>
        {headerElement}
        {message}
      </>
    );
  };

  const headerElement = createShorthand('h3', header);

  return (
    <StyledSnackbar {...rest} autoHideDuration={autoHideDuration} open={_open}>
      {children || renderShortHand()}
    </StyledSnackbar>
  );
};

// ======================================================
export interface SnackbarProps extends StrictSnackbarProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSnackbarProps {
  /** The number of milliseconds to wait before automatically calling the onClose function. */
  autoHideDuration?: number;

  /** A snackbar is less pronounced. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** The color of the link. */
  color?: COLORS;

  /** A snackbar may be formatted to display a error message. */
  error?: boolean;

  /** A snackbar can take the full width of its parent. */
  fluid?: boolean;

  /** Message. */
  message?: string;

  /** MessageHeader. */
  header?: string;

  /** Called on close. */
  onClose?: (data: SnackbarProps) => void;

  /** If true, the component is shown. */
  open?: boolean;

  /** Shorthand for Icon. */
  icon?: IconProps;

  /** A snackbar may be formatted to display information. */
  info?: boolean;

  /** The position of the snackbar. */
  position?: POSITIONS;

  /** A snackbar can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A snackbar may be formatted to display a positive message. */
  success?: boolean;

  /** A snackbar may be formatted to display warning messages. */
  warning?: boolean;
}

export default Snackbar;
