import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const ImageExampleImage = () => <Image src={faker.image.animals()} />;

export default ImageExampleImage;
