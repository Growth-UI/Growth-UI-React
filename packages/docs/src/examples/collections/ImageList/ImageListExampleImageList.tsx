import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import ImageList from '@growth-ui/react/collections/ImageList';
import React from 'react';

const ImageListExampleImageList = () => (
  <ImageList
    cols={6}
    responsive={{
      mobile: {
        breakpoint: 700,
        min: 210,
      },
    }}
  >
    {new Array(12).fill(0).map((_, i) => (
      <ImageList.Item key={i}>
        <Image src={faker.image.animals()} />
      </ImageList.Item>
    ))}
  </ImageList>
);

export default ImageListExampleImageList;
