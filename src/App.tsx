import React from 'react';
import SignIn from './components/SignIn/Signin';

import './app.scss';

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1 className='app-title'>Welcome to LQRK</h1>
      <SignIn />
    </div>
  );
};

export default App;
