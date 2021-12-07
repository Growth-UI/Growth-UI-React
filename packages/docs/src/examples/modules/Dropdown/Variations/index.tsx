import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const DropdownVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:dropdown.icon.id')}
        title={t('examples:dropdown.icon.title')}
        description={t('examples:dropdown.icon.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleIcon"
      />

      <ComponentExample
        id={t('examples:dropdown.space.id')}
        title={t('examples:dropdown.space.title')}
        description={t('examples:dropdown.space.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleSpace"
      />

      <ComponentExample
        id={t('examples:dropdown.simpleSpace.id')}
        title={t('examples:dropdown.simpleSpace.title')}
        description={t('examples:dropdown.simpleSpace.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleSimpleSpace"
      />

      <ComponentExample
        id={t('examples:dropdown.scrolling.id')}
        title={t('examples:dropdown.scrolling.title')}
        description={t('examples:dropdown.scrolling.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleScrolling"
      />

      <ComponentExample
        id={t('examples:dropdown.scrollingNumber.id')}
        title={t('examples:dropdown.scrollingNumber.title')}
        description={t('examples:dropdown.scrollingNumber.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleScrollingNumber"
      />

      <ComponentExample
        id={t('examples:dropdown.trigger.id')}
        title={t('examples:dropdown.trigger.title')}
        description={t('examples:dropdown.trigger.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleTrigger"
      />

      <ComponentExample
        id={t('examples:dropdown.upward.id')}
        title={t('examples:dropdown.upward.title')}
        description={t('examples:dropdown.upward.description')}
        examplePath="modules/Dropdown/Variations/DropdownExampleUpward"
      />
    </ExampleSection>
  );
};

export default DropdownVariationsExamples;
