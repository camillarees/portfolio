import * as React from 'react';
import About from './components/About'
import Profile from './components/Profile';
import MyStory from './components/Timeline';
import SkillBadges from './components/Skills';
import ToolsLanguages from './components/Tools';
import CoreValues from './components/Values';
import VftModal from './components/Modal/VftModal';
import MixtapeModal from './components/Modal/MixtapeModal';
import PlantSpaceModal from './components/Modal/PlantSpaceModal';
import CityExplorerModal from './components/Modal/CityExplorerModal';
import { Center, Container, Group, Space, Stack, Title, Divider, Text } from '@mantine/core';
import { motion } from 'framer-motion';

import './App.css';

function App() {

  return (
    <Container>
      <About />
      <Space h="xl" />
      <Center>
        <Profile />
      </Center>
      <Space h="xl" />
      <Title align='center'>My story</Title>
      <Space h="xl" />
      <Center>

        <MyStory />
      </Center>
      <Space h="xl" />
      <CoreValues />

      <Space h="xl" />
      <Group position="center" grow>
        <Stack>
          <Title>Skills</Title>
          <SkillBadges />
        </Stack>
        <Stack>
          <Space h="xl" />
          <Title>Tools & Languages</Title>
          <ToolsLanguages />
        </Stack>
      </Group>

      <Space h="xl" />
      <Divider my="sm" />
      <Title align="center">Projects</Title>
      <Space h="xl" />
      <Text align="center" fz="xl">Full-Stack</Text>
      <motion.div
        transition={{
          duration: .5,
          delay: 0.3,
          ease: [0.2, 0.2, 0.2, 0.2],
        }}
        initial={{ opacity: 0, y: 23 }}
        whileInView={{ opacity: 1, y: 5 }}
        viewport={{ once: true }}
      >
        <VftModal />
      </motion.div>
      <Space h="xl" />
      <motion.div
        transition={{
          duration: .5,
          delay: 0.3,
          ease: [0.2, 0.2, 0.2, 0.2],
        }}
        initial={{ opacity: 0, y: 23 }}
        whileInView={{ opacity: 1, y: 5 }}
        viewport={{ once: true }}
      >
        <CityExplorerModal />
      </motion.div>
      <Space h="xl" />
      <motion.div
        transition={{
          duration: .5,
          delay: 0.3,
          ease: [0.2, 0.2, 0.2, 0.2],
        }}
        initial={{ opacity: 0, y: 23 }}
        whileInView={{ opacity: 1, y: 5 }}
        viewport={{ once: true }}
      >
        <MixtapeModal />
      </motion.div>
      <Space h="xl" />
      <Text align="center" fz="xl">Backend</Text>
      <motion.div
        transition={{
          duration: .5,
          delay: 0.3,
          ease: [0.2, 0.2, 0.2, 0.2],
        }}
        initial={{ opacity: 0, y: 23 }}
        whileInView={{ opacity: 1, y: 5 }}
        viewport={{ once: true }}
      >
        <PlantSpaceModal />
      </motion.div>

    </Container>
  );
}

export default App;
