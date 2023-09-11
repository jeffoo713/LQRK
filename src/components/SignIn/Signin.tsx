import React, { Fragment } from 'react';

import './signin.scss';

const SignIn: React.FC = () => {
  const handleSignIn = () => {
    console.log('trying to sign in');
  };

  return (
    <Fragment>
      <form className='signin-form'>
        <input type='text' placeholder='Start with your username!' />
        <button type='button' onClick={handleSignIn}>
          SIGN IN
        </button>
      </form>
      <a href='/signup'>
        <span>Create an account!</span>
      </a>
    </Fragment>
  );
};

export default SignIn;
