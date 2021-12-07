import Form from '@growth-ui/react/collections/Form';
import React from 'react';

const FormExampleGroup = () => (
  <Form>
    <Form.Input label="Email" icon="email" />
    <Form.Group>
      <Form.Input label="First name" error feedback="wow" />
      <Form.Input label="Last name" />
    </Form.Group>
    <Form.TextArea label="Note" />
    <Form.Button primary>Submit</Form.Button>
  </Form>
);

export default FormExampleGroup;
