import Divider from '@growth-ui/react/elements/Divider';
import Form from '@growth-ui/react/collections/Form';
import React, { MouseEvent, useState } from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Accordion, {
  AccordionPanelProps,
} from '@growth-ui/react/modules/Accordion';

const panels = [
  {
    key: 'my-favorite-1',
    title: 'My favorite movie',
    content: 'Catch me if you can',
  },
  {
    key: 'my-favorite-2',
    title: 'My favorite food',
    content: 'Korean BBQ',
  },
  {
    key: 'my-favorite-3',
    title: 'my favorite singer',
    content: 'Brown Eyed Soul',
  },
];

const AccordionExampleCustomization = () => {
  const [activeTitle, setActiveTitle] =
    useState<AccordionPanelProps['title']>();
  const [activeContent, setActiveContent] =
    useState<AccordionPanelProps['content']>();

  const handlePanelClick = (
    _: MouseEvent,
    { title, content }: AccordionPanelProps,
  ) => {
    setActiveTitle(title);
    setActiveContent(content);
  };

  return (
    <>
      <Segment>
        <b>{activeTitle}</b>: {activeContent}
      </Segment>
      <Segment>
        <Accordion>
          {panels.map((panel, index) => (
            <Accordion.Panel
              {...panel}
              key={index}
              onClick={handlePanelClick}
            />
          ))}
        </Accordion>
        <Divider />
        <Form>
          <Form.Input label="Email" />
          <Accordion fluid>
            <Accordion.Panel>
              <Accordion.Title>Optional</Accordion.Title>
              <Accordion.Content>
                <Form.Input label="Name" />
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </Form>
      </Segment>
    </>
  );
};

export default AccordionExampleCustomization;
