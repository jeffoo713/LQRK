import React, { Fragment, useContext, useState } from 'react';
import userService from '../../services/userService';
import GlobalContext from '../../stateManagement/globalContext';
import { UserActionTypeEnum } from '../../stateManagement/reducers/userReducer/userActionTypeEnums';

import './signin.scss';

const SignIn: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [formInput, setFormInput] = useState<FormInput>({ username: '' });
  const { username } = formInput;
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!username) return;

    const res = await userService.signIn(username);
    console.log(res);

    setFormInput(prev => ({
      ...prev,
      username: '',
    }));

    if (res.errors.length) return console.log(res.errors);

    dispatch({
      type: UserActionTypeEnum.USER_SIGN_IN,
      payload: { userId: res.user.id, username: res.user.username },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <form className='signin-form' onSubmit={handleSignIn}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleInputChange}
          placeholder='Start with your username!'
          autoComplete='off'
        />
        <button type='submit'>SIGN IN</button>
      </form>
      <a href='/'>
        <span>Create an account!</span>
      </a>
    </Fragment>
  );
};

export default SignIn;
