import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import FormGroup from './FormGroup';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import React, { Children, cloneElement, CSSProperties, FC, isValidElement } from 'react';
import styled from 'styled-components';
import { FONTSIZES } from '../../types';

export const StyledForm = styled.form<FormProps>`
  ${({ fluid }) => fluid && 'width: 100% !important;'}
`;

const Form: FC<FormProps> & FormComponents = (props) => {
  const { children, size, ...rest } = props;

  const newChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        size,
      });
    }

    return child;
  });

  return (
    <StyledForm {...rest} noValidate>
      {newChildren}
    </StyledForm>
  );
};

Form.Button = FormButton;
Form.Checkbox = FormCheckbox;
Form.Group = FormGroup;
Form.Input = FormInput;
Form.Select = FormSelect;
Form.TextArea = FormTextArea;

interface FormComponents {
  Button: typeof FormButton;
  Checkbox: typeof FormCheckbox;
  Group: typeof FormGroup;
  Input: typeof FormInput;
  Select: typeof FormSelect;
  TextArea: typeof FormTextArea;
}

// ======================================================
export interface FormProps extends StrictFormProps {
  [k: string]: any;
}

// ======================================================
export interface StrictFormProps {
  /** Additional classes. */
  className?: string;

  /** A form can take the full width of its parent. */
  fluid?: boolean;

  /** A form can vary in size. */
  size?: FONTSIZES;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Form;
