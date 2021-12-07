import Form from '@growth-ui/react/collections/Form';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid>
      <Grid.Row horizontalAlign="center">
        <Grid.Col width={6} tablet={13} mobile={15} minimobile={15}>
          <Spacer size={150} />
          <Form fluid>
            <Heading textAlign="center">Signin</Heading>
            <Form.Input
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Button fluid primary>
              Signin
            </Form.Button>
            <Grid.Row verticalAlign="middle" horizontalAlign="space-between">
              <a href="#">Forgot password?</a>
              <a href="#">Don&apos;t have an account? Sign Up</a>
            </Grid.Row>
          </Form>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default SigninForm;
