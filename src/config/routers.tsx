import React from 'react';
import { Link, Params, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from '../App';
import SignIn from '../components/SignIn/Signin';
import MyLiquors from '../components/MyLiquors/MyLiquors';
import LiquorPage from '../components/LiquorPage/LIquorPage';
import CategoryMenu from '../components/MyLiquors/CategroyMenu';

import { getUserLiquorData } from './routeLoaders/myLIquorsLoader';
import { TranslatedLiquorTypeEnums } from '../enums/liquorEnums/liquorTypeEnum';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='auth' element={<SignIn />} />
      <Route
        path='my-liquors'
        loader={async () => await getUserLiquorData()}
        element={<MyLiquors />}
        handle={{
          crumb: () => <Link to='/my-liquors'>Categories</Link>,
        }}
      >
        <Route index element={<CategoryMenu />} />
        <Route
          path=':liquorType'
          element={<LiquorPage />}
          loader={loaderData => loaderData.params}
          handle={{
            crumb: (params: Params<string>) => (
              <span>{TranslatedLiquorTypeEnums[params.liquorType! as LiquorType]}</span>
            ),
          }}
        />
      </Route>
    </Route>
  )
);
