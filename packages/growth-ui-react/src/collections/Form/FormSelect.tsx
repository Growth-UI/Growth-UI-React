import React, { FC } from 'react';
import Select, { SelectProps } from '../../modules/Select';
import styled from 'styled-components';

export const StyledFormSelect = styled.div<FormSelectProps>`
  margin-bottom: 0.75em;
  padding: 0.25em;
`;

const FormSelect: FC<FormSelectProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledFormSelect>
      <Select {...rest}>{children}</Select>
    </StyledFormSelect>
  );
};

// ======================================================
export interface FormSelectProps extends SelectProps {
  [k: string]: any;
}

export default FormSelect;
