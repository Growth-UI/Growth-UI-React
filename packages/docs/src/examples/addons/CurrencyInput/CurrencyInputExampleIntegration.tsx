import CurrencyInput from '@growth-ui/currency-input';
import Input from '@growth-ui/react/elements/Input';
import React, { useState } from 'react';

const CurrencyInputExampleIntegration = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState('');

  const handleChange = (newValue: number) => {
    if (newValue >= 100) {
      setError('Too much!');
    } else {
      setError('');
    }

    setValue(newValue);
  };

  return (
    <Input adornment="$" label="Amount" error={!!error} feedback={error}>
      <CurrencyInput basic fixed={2} value={value} onChange={handleChange} />
    </Input>
  );
};

export default CurrencyInputExampleIntegration;
