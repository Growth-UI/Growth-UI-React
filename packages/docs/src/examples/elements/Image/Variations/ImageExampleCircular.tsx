import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const ImageExampleCircular = () => (
  <Image src={faker.image.city(300, 300)} circular />
);

export default ImageExampleCircular;
