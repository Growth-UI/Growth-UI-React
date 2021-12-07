import Form from '@growth-ui/react/collections/Form';
import React from 'react';
import { FONTSIZES } from '@growth-ui/react/types';

const sizes: FONTSIZES[] = [
  '2xs',
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
];

const FormExampleSize = () =>
  sizes.map((size) => (
    <Form size={size} key={size}>
      <Form.Group>
        <Form.Input label="First name" />
        <Form.Input label="Last name" />
      </Form.Group>
      <Form.Button primary>Submit</Form.Button>
    </Form>
  ));

export default FormExampleSize;
