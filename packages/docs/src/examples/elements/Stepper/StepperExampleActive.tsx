import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Stepper from '@growth-ui/react/elements/Stepper';

const StepperExampleActive = () => (
  <Segment>
    <Stepper>
      <Stepper.Step completed>
        <Stepper.Content
          title="Shipping"
          description="Choose your shipping options"
        />
      </Stepper.Step>
      <Stepper.Step active>
        <Stepper.Content
          title="Billing"
          description="Enter billing information"
        />
      </Stepper.Step>
      <Stepper.Step>
        <Stepper.Content title="Confirm Order" />
      </Stepper.Step>
    </Stepper>
  </Segment>
);

export default StepperExampleActive;
