import React, { Fragment } from 'react';
import styled from 'styled-components';
import SignIn from './components/SignIn/Signin';
import { useAuth } from './hooks/useAuth';
import AppBanner from './components/AppBanner/AppBanner';

import './app.scss';

const AppContainer = styled.div<{ $signedIn: boolean }>`
  width: 100%;
  min-height: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: ${props => (props.$signedIn ? '5vh' : '30vh')};
`;

const App: React.FC = () => {
  const { isSignedIn, handleSignOut } = useAuth();

  return (
    <AppContainer $signedIn={isSignedIn}>
      <AppBanner signedIn={isSignedIn} />
      {isSignedIn ? (
        <>
          logged in!
          <button type='button' onClick={handleSignOut}>
            {' '}
            sign out
          </button>
        </>
      ) : (
        <SignIn />
      )}
    </AppContainer>
  );
};

export default App;
