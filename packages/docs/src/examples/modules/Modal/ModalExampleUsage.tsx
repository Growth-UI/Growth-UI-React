import Button from '@growth-ui/react/elements/Button';
import Modal from '@growth-ui/react/modules/Modal';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useState } from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const ModalExampleUsage = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const onOpen = () => {
    setLogs([...logs, 'onOpen']);
  };

  const onClose = () => {
    setLogs([...logs, 'onClose']);
  };

  return (
    <>
      <Segment>
        {logs.map((log, index) => (
          <Paragraph key={index}>{log}</Paragraph>
        ))}
      </Segment>
      <Modal
        trigger={<Button>Open Modal</Button>}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Modal.Header subheader="Country in East Asia">
          South Korea
        </Modal.Header>
        <Modal.Content>
          South Korea, an East Asian nation on the southern half of the Korean
          Peninsula, shares one of the world’s most heavily militarized borders
          with North Korea. It’s equally known for its green, hilly countryside
          dotted with cherry trees and centuries-old Buddhist temples, plus its
          coastal fishing villages, sub-tropical islands and high-tech cities
          such as Seoul, the capital. ― Google
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            icon="camera"
            onClick={() => {
              window.open(
                'https://www.google.com/travel/things-to-do?g2lb=4371335%2C4640247%2C4401769%2C4270442%2C4306835%2C4596364%2C2503771%2C2502548%2C4617195%2C4645787%2C4629143%2C4605861%2C2503781%2C4258168%2C4419364%2C4644488%2C4515404%2C4597339%2C4317915%2C4291517%2C4284970%2C4270859&hl=en-US&gl=us&ssta=1&dest_mid=%2Fm%2F06qd3&dest_state_type=main&dest_src=kl&sa=X&ved=2ahUKEwiovNKLu83zAhU1HDQIHeBaCqsQri56BAhoEAM#ttdm=37.596271_127.251424_10',
                '_blank',
              );
            }}
          >
            Things to do
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ModalExampleUsage;
