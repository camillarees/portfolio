import * as React from 'react';
import About from './components/About'
import MyStory from './components/Timeline';
import SkillBadges from './components/Skills';
import ToolsLanguages from './components/Tools';
import CoreValues from './components/Values';
import Projects from './components/Projects';
import { Container } from '@mantine/core';

import './App.css';

function App() {

  return (
    <Container>
      <About />
      <MyStory />
      <SkillBadges />
      <ToolsLanguages />
      <CoreValues />

      <Projects />
    </Container>
  );
}

export default App;
