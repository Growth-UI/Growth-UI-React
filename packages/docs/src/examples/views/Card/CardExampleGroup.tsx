import Card from '@growth-ui/react/views/Card';
import faker from 'faker';
import IconButton from '@growth-ui/react/addons/IconButton';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';

const CardExampleGroup = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image rounded floated="right" size="mini" src={faker.image.avatar()} />
        <Card.Header>Steve Pink</Card.Header>
        <Card.Meta>Philosopher</Card.Meta>
      </Card.Content>
      <Card.Media src="https://cdn.vox-cdn.com/thumbor/l8A42REnmdLhw29D8qNVyQny0EQ=/0x0:1793x1073/1720x0/filters:focal(0x0:1793x1073):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/1005760/lesswargraph.0.png" />
      <Card.Content>
        <Card.Description>
          We&apos;re living through the most peaceful era in human
          history!&nbsp;
          <a
            href="https://www.vox.com/2015/5/21/8635369/pinker-taleb"
            rel="noreferrer"
            target="_blank"
          >
            (vox)
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <IconButton name="heart" />
        <IconButton name="share" />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image rounded floated="right" size="mini" src={faker.image.avatar()} />
        <Card.Header>Na Tale</Card.Header>
        <Card.Meta>Philosopher</Card.Meta>
      </Card.Content>
      <Card.Media src="https://cdn.vox-cdn.com/thumbor/esjG4U2XnWoggdOerFpQgKg5jvg=/366x0:4354x2991/1820x1213/filters:focal(366x0:4354x2991):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46370484/156824770.0.0.jpg" />
      <Card.Content>
        <Card.Description>
          Conflicts (on the scale of 10 million casualties) only happen once a
          century, but Pink&apos;s &quot;long peace&quot; only covers 70 years.
          &nbsp;
          <a
            href="https://www.vox.com/2015/5/21/8635369/pinker-taleb"
            rel="noreferrer"
            target="_blank"
          >
            (vox)
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <IconButton name="heart" />
        <IconButton name="share" />
      </Card.Content>
    </Card>
  </Card.Group>
);

export default CardExampleGroup;
