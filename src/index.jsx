import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { FirstJoke } from './components/FirstJoke';

const App = () => {
  return <FirstJoke />;
};

createRoot(document.querySelector('#app')).render(<App />);
