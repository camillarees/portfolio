import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import MixtapeImage from '../Projects/MixtapeImage';
import MixtapeVideo from '../Video/MixtapeVideo';

function MixtapeModal() {


  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={() => setOpened(false)}
      >
       <MixtapeVideo />
      </Modal>
    <div onClick={() => setOpened(true)} >
      <Group position="center">
      <MixtapeImage 
      />
      </Group>
      </div>
    </>
  );
}

export default MixtapeModal;