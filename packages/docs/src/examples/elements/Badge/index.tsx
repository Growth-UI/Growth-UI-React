import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const BadgeExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:badge.badge.id')}
        title={t('examples:badge.badge.title')}
        description={t('examples:badge.badge.description')}
        examplePath="elements/Badge/BadgeExampleBadge"
      />

      <ComponentExample
        id={t('examples:badge.color.id')}
        title={t('examples:badge.color.title')}
        description={t('examples:badge.color.description')}
        examplePath="elements/Badge/BadgeExampleColor"
      />

      <ComponentExample
        id={t('examples:badge.inline.id')}
        title={t('examples:badge.inline.title')}
        description={t('examples:badge.inline.description')}
        examplePath="elements/Badge/BadgeExampleInline"
      />

      <ComponentExample
        id={t('examples:badge.dot.id')}
        title={t('examples:badge.dot.title')}
        description={t('examples:badge.dot.description')}
        examplePath="elements/Badge/BadgeExampleDot"
      />

      <ComponentExample
        id={t('examples:badge.direction.id')}
        title={t('examples:badge.direction.title')}
        description={t('examples:badge.direction.description')}
        examplePath="elements/Badge/BadgeExampleDirection"
      />

      <ComponentExample
        id={t('examples:badge.relaxed.id')}
        title={t('examples:badge.relaxed.title')}
        description={t('examples:badge.relaxed.description')}
        examplePath="elements/Badge/BadgeExampleRelaxed"
      />

      <ComponentExample
        id={t('examples:badge.max.id')}
        title={t('examples:badge.max.title')}
        description={t('examples:badge.max.description')}
        examplePath="elements/Badge/BadgeExampleMax"
      />
    </>
  );
};

export default BadgeExamples;
