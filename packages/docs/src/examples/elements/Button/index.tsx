import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ButtonExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:button.button.id')}
        title={t('examples:button.button.title')}
        description={t('examples:button.button.description')}
        examplePath="elements/Button/ButtonExampleButton"
      />

      <ComponentExample
        id={t('examples:button.emphasis.id')}
        title={t('examples:button.emphasis.title')}
        description={t('examples:button.emphasis.description')}
        examplePath="elements/Button/ButtonExampleEmphasis"
      />

      <ComponentExample
        id={t('examples:button.basic.id')}
        title={t('examples:button.basic.title')}
        description={t('examples:button.basic.description')}
        examplePath="elements/Button/ButtonExampleBasic"
      />

      <ComponentExample
        id={t('examples:button.active.id')}
        title={t('examples:button.active.title')}
        description={t('examples:button.active.description')}
        examplePath="elements/Button/ButtonExampleActive"
      />

      <ComponentExample
        id={t('examples:button.loading.id')}
        title={t('examples:button.loading.title')}
        description={t('examples:button.loading.description')}
        examplePath="elements/Button/ButtonExampleLoading"
      />

      <ComponentExample
        id={t('examples:button.borderless.id')}
        title={t('examples:button.borderless.title')}
        description={t('examples:button.borderless.description')}
        examplePath="elements/Button/ButtonExampleBorderless"
      />

      <ComponentExample
        id={t('examples:button.group.id')}
        title={t('examples:button.group.title')}
        description={t('examples:button.group.description')}
        examplePath="elements/Button/ButtonExampleGroup"
      />

      <ComponentExample
        id={t('examples:button.roundGroupButton.id')}
        title={t('examples:button.roundGroupButton.title')}
        description={t('examples:button.roundGroupButton.description')}
        examplePath="elements/Button/ButtonExampleGroupRound"
      />
    </>
  );
};

export default ButtonExamples;
