import Input, { InputProps } from '../../elements/Input';
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledFormInput = styled.div<FormInputProps>`
  margin-bottom: 0.75em;
  padding: 0.25em;
`;

const FormInput: FC<FormInputProps> = (props) => {
  const { ...rest } = props;

  return (
    <StyledFormInput>
      <Input {...rest} fluid />
    </StyledFormInput>
  );
};

// ======================================================
export interface FormInputProps extends InputProps {
  [k: string]: any;
}

export default FormInput;
