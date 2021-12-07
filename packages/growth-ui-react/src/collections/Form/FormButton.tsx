import Button, { ButtonProps } from '../../elements/Button';
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledFormButton = styled.div<FormButtonProps>`
  margin-bottom: 0.75em;
  padding: 0.25em;
`;

const FormButton: FC<FormButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledFormButton>
      <Button {...rest} type="submit">
        {children}
      </Button>
    </StyledFormButton>
  );
};

// ======================================================
export interface FormButtonProps extends ButtonProps {
  [k: string]: any;
}

export default FormButton;
