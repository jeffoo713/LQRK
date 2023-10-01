import React from 'react';
import { Link, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '../App';
import SignIn from '../components/SignIn/Signin';
import MyLiquors from '../components/MyLiquors/MyLiquors';
import LiquorPage from '../components/LiquorPage/LIquorPage';

import { getUserLiquorData } from './routeLoaders/myLIquorsLoader';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='auth' element={<SignIn />} />
      <Route
        path='my-liquors'
        loader={async () => await getUserLiquorData()}
        element={<MyLiquors />}
        handle={{
          crumb: () => <Link to='/my-liquors'>My liquors</Link>,
        }}
      />
      <Route
        path='my-liquors/:liquorType'
        element={<LiquorPage />}
        handle={{
          crumb: (data: any) => <span>{data}</span>,
        }}
      />
    </Route>
  )
);
