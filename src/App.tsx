import React, { Fragment, useContext } from 'react';
import SignIn from './components/SignIn/Signin';
import { useAuth } from './hooks/useAuth';

import './app.scss';

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className='app'>
      {!isLoggedIn ? (
        <Fragment>
          <h1 className='app-title'>Welcome to LQRK</h1>
          <SignIn />
        </Fragment>
      ) : (
        <>logged in!</>
      )}
    </div>
  );
};

export default App;
