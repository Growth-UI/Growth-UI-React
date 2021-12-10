import faker from 'faker';
import React from 'react';
import Select from '@growth-ui/react/modules/Select';
import Spacer from '@growth-ui/react/elements/Spacer';
import stringSimilarity from 'string-similarity';
import times from 'lodash/times';

const options = times(5).map((n) => ({
  key: n,
  text: faker.name.findName(),
  value: n,
  image: {
    src: faker.image.imageUrl(),
    lazy: false,
  },
}));

const SelectExampleSearch = () => {
  const customSearchFunction = (searchQuery: any, item: any) => {
    const string = item.text;

    const similarity = stringSimilarity.compareTwoStrings(string, searchQuery);

    if (similarity > 0.1) return true;

    return false;
  };

  return (
    <>
      <Select multiple search options={options} placeholder="Search..." />
      <Spacer size={30} />
      <Select
        search={customSearchFunction}
        options={options}
        placeholder="Custom Search..."
      />
      <Spacer size={30} />
      <Select clearable search options={options} placeholder="Search..." />
    </>
  );
};

export default SelectExampleSearch;
