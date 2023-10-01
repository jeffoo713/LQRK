import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalProvider from './stateManagement/GlobalProvider';

import App from './App';
import SignIn from './components/SignIn/Signin';
import MyLiquors from './components/MyLiquors/MyLiquors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Todo: have a better route error component
    errorElement: <h1>No route available</h1>,
    children: [
      {
        path: 'auth',
        element: <SignIn />,
      },
      {
        path: 'my-liquors',
        element: <MyLiquors />,
      },
    ],
  },
]);

const container = document.getElementById('lqrk-app')!;
const root = createRoot(container);

root.render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
