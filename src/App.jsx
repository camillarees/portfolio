import * as React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import { Container } from '@mantine/core';

import './App.css';

function App() {

  return (
    <Container>
      <About />
      <Projects />
    </Container>
  );
}

export default App;
