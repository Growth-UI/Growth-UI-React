import Checkbox, { CheckboxProps } from '../../modules/Checkbox';
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledFormCheckbox = styled.div<FormCheckboxProps>`
  margin-bottom: 0.75em;
  padding: 0.25em;
`;

const FormCheckbox: FC<FormCheckboxProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledFormCheckbox>
      <Checkbox {...rest}>{children}</Checkbox>
    </StyledFormCheckbox>
  );
};

// ======================================================
export interface FormCheckboxProps extends CheckboxProps {
  [k: string]: any;
}

export default FormCheckbox;
