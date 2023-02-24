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
import { Center, Container, Group, Space, Stack, Title, Divider } from '@mantine/core';

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
      <VftModal />
      <Space h="xl" />
      <MixtapeModal />
      <Space h="xl" />
      <PlantSpaceModal />

    </Container>
  );
}

export default App;
