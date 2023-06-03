import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { Joke } from './components/Joke';

const App = () => {
  return <Joke />;
};

createRoot(document.querySelector('#app')).render(<App />);
