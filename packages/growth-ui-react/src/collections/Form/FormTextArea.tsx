import React, { FC } from 'react';
import styled from 'styled-components';
import TextArea, { TextAreaProps } from '../../elements/TextArea';

export const StyledFormTextArea = styled.div<FormTextAreaProps>`
  margin-bottom: 0.75em;
  padding: 0.25em;
`;

const FormTextArea: FC<FormTextAreaProps> = (props) => {
  const { ...rest } = props;

  return (
    <StyledFormTextArea>
      <TextArea {...rest} fluid />
    </StyledFormTextArea>
  );
};

// ======================================================
export interface FormTextAreaProps extends TextAreaProps {
  [k: string]: any;
}

export default FormTextArea;
