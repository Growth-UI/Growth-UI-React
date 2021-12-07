import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const ImageExampleHidden = () => <Image src={faker.image.city()} hidden />;

export default ImageExampleHidden;
