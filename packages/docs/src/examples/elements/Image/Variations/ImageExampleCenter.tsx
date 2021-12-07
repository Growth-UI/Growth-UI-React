import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const ImageExampleCenter = () => (
  <Image src={faker.image.city(200, 200)} centered />
);

export default ImageExampleCenter;
