import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import PlantSpaceCarousel from '../Carousel/index';
import PlantSpaceImage from '../Projects/PlantSpaceImage';

function PlantSpaceModal() {


  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={() => setOpened(false)}
      >
       <PlantSpaceCarousel />
      </Modal>
    <div onClick={() => setOpened(true)} >
      <Group position="center">
      <PlantSpaceImage />
      </Group>
      </div>
    </>
  );
}

export default PlantSpaceModal;