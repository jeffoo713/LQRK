import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import userService from '../../services/userService';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../assets/_colors';
import Button from '../shared/Button';

const StyledSignIn = styled.form`
  width: 60%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 80%;
  font-size: 1.1rem;
  padding: 0.4rem;
  border: 1px solid ${COLORS.FORM.INPUT_BORDER};
  border-radius: 0.2rem;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const SignIn: React.FC = () => {
  const { handleAfterSignIn } = useAuth();

  const [formInput, setFormInput] = useState<FormInput>({ username: '' });
  const { username } = formInput;

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!username) return;

    const res = await userService.signIn(username.toLocaleLowerCase());

    setFormInput(prev => ({
      ...prev,
      username: '',
    }));

    if (res.errors.length) return console.log(res.errors);

    handleAfterSignIn(res);
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
      <StyledSignIn className='signin-form' onSubmit={handleSignIn}>
        <StyledInput
          type='text'
          name='username'
          value={username}
          onChange={handleInputChange}
          placeholder='Start with your username!'
          autoComplete='off'
        />
        <Button {...{ type: 'submit' }} forSignIn>
          SIGN IN
        </Button>
      </StyledSignIn>
      <a href='/'>
        <span>Create an account!</span>
      </a>
    </Fragment>
  );
};

export default SignIn;
