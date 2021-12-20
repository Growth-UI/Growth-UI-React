import CurrencyInput from '@growth-ui/react/addons/CurrencyInput';
import Heading from '@growth-ui/react/elements/Heading';
import React, { CSSProperties } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const containerStyle: CSSProperties = {
  borderRadius: 0,
};
const inputStyle: CSSProperties = {
  color: 'red',
};

const CurrencyInputExampleCustomization = () => {
  return (
    <>
      <Heading as="h4">Container Style</Heading>
      <Spacer size={5} />
      <CurrencyInput
        placeholder="0.00"
        fixed={2}
        containerStyle={containerStyle}
      />
      <Spacer size={30} />
      <Heading as="h4">Input Style</Heading>
      <Spacer size={5} />
      <CurrencyInput placeholder="0.00" fixed={2} inputStyle={inputStyle} />
    </>
  );
};

export default CurrencyInputExampleCustomization;
