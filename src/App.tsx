import React, { Fragment, useContext } from 'react';
import SignIn from './components/SignIn/Signin';
import { useAuth } from './hooks/useAuth';

import './app.scss';

const App: React.FC = () => {
  const { isSignedIn, handleSignOut } = useAuth();

  return (
    <div className='app'>
      {!isSignedIn ? (
        <Fragment>
          <h1 className='app-title'>Welcome to LQRK</h1>
          <SignIn />
        </Fragment>
      ) : (
        <>
          logged in!
          <button type='button' onClick={handleSignOut}>
            {' '}
            sign out
          </button>
        </>
      )}
    </div>
  );
};

export default App;
