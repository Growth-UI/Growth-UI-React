import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import ImageList from '@growth-ui/react/collections/ImageList';
import React from 'react';

const ImageListTitlebarStandard = () => (
  <ImageList
    cols={2}
    rowHeight={300}
    rounded={false}
    responsive={{
      mobile: {
        breakpoint: 700,
        min: 210,
      },
    }}
  >
    {new Array(5).fill(0).map((_, i) => (
      <ImageList.Item key={i}>
        <Image src={faker.image.fashion()} />
        <ImageList.ItemBar
          title={faker.name.firstName()}
          subtitle={faker.name.lastName()}
        />
      </ImageList.Item>
    ))}
  </ImageList>
);

export default ImageListTitlebarStandard;
