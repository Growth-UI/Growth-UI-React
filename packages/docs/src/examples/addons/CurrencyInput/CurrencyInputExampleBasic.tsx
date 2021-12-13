import CurrencyInput from '@growth-ui/currency-input';
import React from 'react';

const CurrencyInputExampleBasic = () => {
  return (
    <CurrencyInput
      basic
      placeholder="0.00"
      decimalsLimit={5}
      fixed={2}
      size={20}
    />
  );
};

export default CurrencyInputExampleBasic;
