import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const EventListenerExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:event-listener.resize.id')}
        title={t('examples:event-listener.resize.title')}
        description={t('examples:event-listener.resize.description')}
        examplePath="addons/EventListener/EventListenerExampleResize"
      />

      <ComponentExample
        id={t('examples:event-listener.keydown.id')}
        title={t('examples:event-listener.keydown.title')}
        description={t('examples:event-listener.keydown.description')}
        examplePath="addons/EventListener/EventListenerExampleKeydown"
      />
    </>
  );
};

export default EventListenerExamples;
