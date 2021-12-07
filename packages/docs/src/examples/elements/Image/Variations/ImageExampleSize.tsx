import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import Spacer from '@growth-ui/react/elements/Spacer';
import React from 'react';

const ImageExampleSize = () => {
  const image = faker.image.animals();

  return (
    <>
      <Image src={image} size="mini" />
      <Spacer size={30} />
      <Image src={image} size="tiny" />
      <Spacer size={30} />
      <Image src={image} size="small" />
      <Spacer size={30} />
      <Image src={image} size="medium" />
      <Spacer size={30} />
      <Image src={image} size="large" />
    </>
  );
};

export default ImageExampleSize;
