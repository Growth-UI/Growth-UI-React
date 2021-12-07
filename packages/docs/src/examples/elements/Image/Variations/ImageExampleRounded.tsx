import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const ImageExampleRounded = () => <Image src={faker.image.city()} rounded />;

export default ImageExampleRounded;
