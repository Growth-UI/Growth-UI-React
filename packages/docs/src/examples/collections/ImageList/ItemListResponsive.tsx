import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import ImageList from '@growth-ui/react/collections/ImageList';
import React from 'react';

const ItemListResponsive = () => (
  <ImageList
    responsive={{
      mobile: {
        breakpoint: 4000,
        min: 210,
      },
    }}
  >
    {new Array(10).fill(0).map((_, i) => (
      <ImageList.Item key={i}>
        <Image src={faker.image.transport()} />
        <ImageList.ItemBar
          title={faker.name.firstName()}
          subtitle={faker.name.lastName()}
          thumbnail={faker.image.food()}
        />
      </ImageList.Item>
    ))}
  </ImageList>
);

export default ItemListResponsive;
