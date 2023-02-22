import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import ProjectImage from '../Projects';
import ProjectCarousel from '../Carousel/index';

function ProjectModal() {


  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        fullScreen
        opened={opened}
        onClose={() => setOpened(false)}
      >
       <ProjectCarousel />
      </Modal>
    <div onClick={() => setOpened(true)} >
      <Group position="center">
      <ProjectImage />
      </Group>
      </div>
    </>
  );
}

export default ProjectModal;