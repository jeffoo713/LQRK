import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalProvider from './stateManagement/GlobalProvider';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const container = document.getElementById('lqrk-app')!;
const root = createRoot(container);

root.render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
