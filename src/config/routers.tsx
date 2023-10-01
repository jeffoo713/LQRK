import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../components/SignIn/Signin';
import MyLiquors from '../components/MyLiquors/MyLiquors';
import { getUserLiquorData } from './routeLoaders/myLIquorsLoader';

export const router = createBrowserRouter([
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
        loader: async () => await getUserLiquorData(),
        element: <MyLiquors />,
      },
    ],
  },
]);
