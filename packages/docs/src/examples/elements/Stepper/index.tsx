import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const StepperExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:stepper.stepper.id')}
        title={t('examples:stepper.stepper.title')}
        description={t('examples:stepper.stepper.description')}
        examplePath="elements/Stepper/StepperExampleStepper"
      />

      <ComponentExample
        id={t('examples:stepper.ordered.id')}
        title={t('examples:stepper.ordered.title')}
        description={t('examples:stepper.ordered.description')}
        examplePath="elements/Stepper/StepperExampleOrdered"
      />

      <ComponentExample
        id={t('examples:stepper.alternative.id')}
        title={t('examples:stepper.alternative.title')}
        description={t('examples:stepper.alternative.description')}
        examplePath="elements/Stepper/StepperExampleAlternative"
      />

      <ComponentExample
        id={t('examples:stepper.vertical.id')}
        title={t('examples:stepper.vertical.title')}
        description={t('examples:stepper.vertical.description')}
        examplePath="elements/Stepper/StepperExampleVertical"
      />

      <ComponentExample
        id={t('examples:stepper.error.id')}
        title={t('examples:stepper.error.title')}
        description={t('examples:stepper.error.description')}
        examplePath="elements/Stepper/StepperExampleError"
      />

      <ComponentExample
        id={t('examples:stepper.completed.id')}
        title={t('examples:stepper.completed.title')}
        description={t('examples:stepper.completed.description')}
        examplePath="elements/Stepper/StepperExampleCompleted"
      />

      <ComponentExample
        id={t('examples:stepper.active.id')}
        title={t('examples:stepper.active.title')}
        description={t('examples:stepper.active.description')}
        examplePath="elements/Stepper/StepperExampleActive"
      />
    </>
  );
};

export default StepperExamples;
