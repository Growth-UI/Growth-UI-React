import Form from '@growth-ui/react/collections/Form';
import React from 'react';

const FormExampleForm = () => (
  <Form>
    <Form.Input label="Email" />
    <Form.Input label="Password" type="password" />
    <Form.Checkbox label="I agree to the terms and conditions." />
    <Form.Button>Sign up</Form.Button>
  </Form>
);

export default FormExampleForm;
