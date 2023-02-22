import * as React from 'react';
import About from './components/About'
import MyStory from './components/Timeline';
import SkillBadges from './components/Skills';
import ToolsLanguages from './components/Tools';
import CoreValues from './components/Values';
import Modal from './components/Modal/index';
import { Container, Group, Grid, Space, Stack, Title } from '@mantine/core';

import './App.css';

function App() {

  return (
    <Container>
      <About />
      <Space h="xl" />
      <Title align='center'>My story</Title>
            <Space h="xl" />
      <Group position="center" grow>
      <CoreValues />
      <MyStory />
      </Group>

      <Space h="xl" /> 
      <Group position="center" grow>
      <Stack>

      <Title>Skills</Title>
      <SkillBadges />
      </Stack>
      <Stack>
      <Title>Tools & Languages</Title>
      <ToolsLanguages />
      </Stack>
      </Group>

      <Space h="xl" />
      <Modal />
    </Container>
  );
}

export default App;
