import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Stepper from '@growth-ui/react/elements/Stepper';

const StepperExampleVertical = () => (
  <Segment>
    <Stepper vertical>
      <Stepper.Step icon="shipping">
        <Stepper.Content
          title="Shipping"
          description="Choose your shipping options"
        />
      </Stepper.Step>
      <Stepper.Step icon="bill">
        <Stepper.Content
          title="Billing"
          description="Enter billing information"
        />
      </Stepper.Step>
      <Stepper.Step icon="confirmation number">
        <Stepper.Content title="Confirm Order" />
      </Stepper.Step>
    </Stepper>
  </Segment>
);

export default StepperExampleVertical;
