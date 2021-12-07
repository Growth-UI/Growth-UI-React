import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const DividerTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:divider.divider.id')}
        title={t('examples:divider.divider.title')}
        description={t('examples:divider.divider.description')}
        examplePath="elements/Divider/Types/DividerExampleDivider"
      />

      <ComponentExample
        id={t('examples:divider.vertical.id')}
        title={t('examples:divider.vertical.title')}
        description={t('examples:divider.vertical.description')}
        examplePath="elements/Divider/Types/DividerExampleVertical"
      />

      <ComponentExample
        id={t('examples:divider.horizontal.id')}
        title={t('examples:divider.horizontal.title')}
        description={t('examples:divider.horizontal.description')}
        examplePath="elements/Divider/Types/DividerExampleHorizontal"
      />

      <ComponentExample
        id={t('examples:divider.horizontalIcon.id')}
        title={t('examples:divider.horizontalIcon.title')}
        description={t('examples:divider.horizontalIcon.description')}
        examplePath="elements/Divider/Types/DividerExampleHorizontalIcon"
      />
    </ExampleSection>
  );
};

export default DividerTypesExamples;
