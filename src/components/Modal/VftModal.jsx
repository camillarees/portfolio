import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import VftImage from '../Projects/VftImage';
import VftVideo from '../Video/VftVideo';

function VftModal() {


  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={() => setOpened(false)}
      >
       <VftVideo />
      </Modal>
    <div onClick={() => setOpened(true)} >
      <Group position="center">
      <VftImage />
      </Group>
      </div>
    </>
  );
}

export default VftModal;