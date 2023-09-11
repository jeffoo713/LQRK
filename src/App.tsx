import React from 'react';

import './App.scss';

const App: React.FC = () => {
  const handleSignIn = () => {
    console.log('trying to sign in');
  };
  return (
    <div className='app'>
      <h1 className='app-title'>Welcome to LQRK</h1>
      <form className='app-signin-form'>
        <input type='text' placeholder='Start with your username!' />
        <button type='button' onClick={handleSignIn}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default App;
