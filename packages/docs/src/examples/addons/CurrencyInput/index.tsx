import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CurrencyInputExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:currency-input.integration.id')}
        title={t('examples:currency-input.integration.title')}
        description={t('examples:currency-input.integration.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleIntegration"
      />

      <ComponentExample
        id={t('examples:currency-input.currency-input.id')}
        title={t('examples:currency-input.currency-input.title')}
        description={t('examples:currency-input.currency-input.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleCurrencyInput"
      />

      <ComponentExample
        id={t('examples:currency-input.fixed.id')}
        title={t('examples:currency-input.fixed.title')}
        description={t('examples:currency-input.fixed.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleFixed"
      />

      <ComponentExample
        id={t('examples:currency-input.compact.id')}
        title={t('examples:currency-input.compact.title')}
        description={t('examples:currency-input.compact.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleCompact"
      />

      <ComponentExample
        id={t('examples:currency-input.prefix.id')}
        title={t('examples:currency-input.prefix.title')}
        description={t('examples:currency-input.prefix.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExamplePrefix"
      />

      <ComponentExample
        id={t('examples:currency-input.decimalsLimit.id')}
        title={t('examples:currency-input.decimalsLimit.title')}
        description={t('examples:currency-input.decimalsLimit.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleDecimalsLimit"
      />

      <ComponentExample
        id={t('examples:currency-input.size.id')}
        title={t('examples:currency-input.size.title')}
        description={t('examples:currency-input.size.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleSize"
      />

      <ComponentExample
        id={t('examples:currency-input.separators.id')}
        title={t('examples:currency-input.separators.title')}
        description={t('examples:currency-input.separators.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleSeparators"
      />

      <ComponentExample
        id={t('examples:currency-input.basic.id')}
        title={t('examples:currency-input.basic.title')}
        description={t('examples:currency-input.basic.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleBasic"
      />

      <ComponentExample
        id={t('examples:currency-input.customization.id')}
        title={t('examples:currency-input.customization.title')}
        description={t('examples:currency-input.customization.description')}
        examplePath="addons/CurrencyInput/CurrencyInputExampleCustomization"
      />
    </>
  );
};

export default CurrencyInputExamples;
