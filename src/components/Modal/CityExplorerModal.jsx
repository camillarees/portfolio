import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import CityExplorerImage from '../Projects/CityExplorerImage';
import CityVideo from '../Video/CityVideo';

function MixtapeModal() {


  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={() => setOpened(false)}
      >
       <CityVideo />
      </Modal>
    <div onClick={() => setOpened(true)} >
      <Group position="center">
      <CityExplorerImage />
      </Group>
      </div>
    </>
  );
}

export default MixtapeModal;