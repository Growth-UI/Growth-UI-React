import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const AccordionExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:accordion.accordion.id')}
        title={t('examples:accordion.accordion.title')}
        description={t('examples:accordion.accordion.description')}
        examplePath="modules/Accordion/AccordionExampleAccordion"
      />

      <ComponentExample
        id={t('examples:accordion.standardShorthand.id')}
        title={t('examples:accordion.standardShorthand.title')}
        description={t('examples:accordion.standardShorthand.description')}
        examplePath="modules/Accordion/AccordionExampleStandardShorthand"
      />

      <ComponentExample
        id={t('examples:accordion.styled.id')}
        title={t('examples:accordion.styled.title')}
        description={t('examples:accordion.styled.description')}
        examplePath="modules/Accordion/AccordionExampleStyled"
      />

      <ComponentExample
        id={t('examples:accordion.fluid.id')}
        title={t('examples:accordion.fluid.title')}
        description={t('examples:accordion.fluid.description')}
        examplePath="modules/Accordion/AccordionExampleFluid"
      />

      <ComponentExample
        id={t('examples:accordion.iconPosition.id')}
        title={t('examples:accordion.iconPosition.title')}
        description={t('examples:accordion.iconPosition.description')}
        examplePath="modules/Accordion/AccordionExampleIconPosition"
      />

      <ComponentExample
        id={t('examples:accordion.exclusive.id')}
        title={t('examples:accordion.exclusive.title')}
        description={t('examples:accordion.exclusive.description')}
        examplePath="modules/Accordion/AccordionExampleExclusive"
      />

      <ComponentExample
        id={t('examples:accordion.defaultActiveIndex.id')}
        title={t('examples:accordion.defaultActiveIndex.title')}
        description={t('examples:accordion.defaultActiveIndex.description')}
        examplePath="modules/Accordion/AccordionExampleDefaultActiveIndex"
      />

      <ComponentExample
        id={t('examples:accordion.iconShorthand.id')}
        title={t('examples:accordion.iconShorthand.title')}
        description={t('examples:accordion.iconShorthand.description')}
        examplePath="modules/Accordion/AccordionExampleIconShorthand"
      />

      <ComponentExample
        id={t('examples:accordion.customization.id')}
        title={t('examples:accordion.customization.title')}
        description={t('examples:accordion.customization.description')}
        examplePath="modules/Accordion/AccordionExampleCustomization"
      />
    </>
  );
};

export default AccordionExamples;
