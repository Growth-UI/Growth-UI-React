import invoke from 'lodash/invoke';
import ModalActions from './ModalActions';
import ModalContent from './ModalConent';
import ModalDimmer from './ModalDimmer';
import ModalHeader from './ModalHeader';
import React, { cloneElement, CSSProperties, FC, isValidElement, SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  text-align: left;
  background: var(--bg);
  box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
  border-radius: 0.28571429rem;
  width: 90%;
  max-width: 900px;
  z-index: 1993;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);

  ${({ centered = true }) =>
    centered &&
    `
    top: 50%;
    transform: translate(-50%, -50%); 
  `}
`;

const Modal: FC<ModalProps> & ModalComponents = (props) => {
  const { children, trigger, onOpen, onClose, ...rest } = props;
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleTriggerClick = (e: SyntheticEvent) => {
    // Call original event handler
    invoke(trigger, 'props.onClick', e);

    if (open) {
      handleClose(e);
    } else {
      handleOpen(e);
    }
  };

  const handleClose = (e: SyntheticEvent) => {
    if (onClose) {
      onClose(e, { ...props, open: false });
    }

    setOpen(false);
  };

  const handleOpen = (e: SyntheticEvent) => {
    if (onOpen) {
      onOpen(e, { ...props, open: true });
    }

    setOpen(true);
  };

  const renderTrigger = () => {
    if (!isValidElement(trigger)) return null;

    return cloneElement<any>(trigger, {
      onClick: handleTriggerClick as any,
    });
  };

  return (
    <>
      {renderTrigger()}
      {open && <ModalDimmer onClick={handleClose} />}
      {open && <StyledModal {...rest}>{children}</StyledModal>}
    </>
  );
};

Modal.Actions = ModalActions;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;

interface ModalComponents {
  Actions: typeof ModalActions;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
}

// ======================================================
export interface ModalProps extends StrictModalProps {
  [k: string]: any;
}

// ======================================================
export interface StrictModalProps {
  /** A modal can be vertically centered in the viewport. */
  centered?: boolean;

  /** Additional classes. */
  className?: string;

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: (event: SyntheticEvent, data: ModalProps) => void;

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?: (event: SyntheticEvent, data: ModalProps) => void;

  /** Controls whether or not the Modal is displayed. */
  open?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** Element to be rendered in-place where the modal is defined. */
  trigger?: any;
}

export default Modal;
