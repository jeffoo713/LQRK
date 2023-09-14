import React, { Fragment, useContext } from 'react';
import SignIn from './components/SignIn/Signin';
import GlobalContext from './stateManagement/globalContext';

import './app.scss';

const App: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { userState } = state;

  return (
    <div className='app'>
      {!userState.username ? (
        <Fragment>
          <h1 className='app-title'>Welcome to LQRK</h1>
          <SignIn />
        </Fragment>
      ) : (
        <>loged in!</>
      )}
    </div>
  );
};

export default App;
