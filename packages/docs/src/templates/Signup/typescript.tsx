import Form from '@growth-ui/react/collections/Form';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid>
      <Grid.Row horizontalAlign="center">
        <Grid.Col width={6} tablet={13} mobile={15} minimobile={15}>
          <Spacer size={150} />
          <Form fluid>
            <Heading textAlign="center">Signup</Heading>
            <Form.Group>
              <Form.Input
                required
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Input
                required
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
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
              Signup
            </Form.Button>
            <Grid.Row reversed>
              <a href="#">Already have an account? Sign in</a>
            </Grid.Row>
          </Form>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default SignupForm;
