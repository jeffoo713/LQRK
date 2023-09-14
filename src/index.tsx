import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalProvider from './stateManagement/GlobalProvider';

import App from './App';

const container = document.getElementById('lqrk-app')!;
const root = createRoot(container);

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
