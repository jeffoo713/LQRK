import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalProvider from './stateManagement/GlobalProvider';
import { router } from './config/routers';

const container = document.getElementById('lqrk-app')!;
const root = createRoot(container);

root.render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
