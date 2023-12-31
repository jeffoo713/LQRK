import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AppBanner from './components/AppBanner/AppBanner';
import { useAuth } from './hooks/useAuth';
import { COLORS } from './assets/styles/_colors';

import './app.css';

const AppContainer = styled.div<{ $signedIn: boolean }>`
  width: 100%;
  min-height: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: ${props => (props.$signedIn ? '0' : '30vh 5vh 5vh 5vh')};
  color:color: ${COLORS.BLACK};
`;

const App: React.FC = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isSignedIn ? navigate('/my-liquors') : navigate('/auth');
  }, [isSignedIn, navigate]);

  return (
    <AppContainer $signedIn={isSignedIn}>
      <AppBanner signedIn={isSignedIn} />
      <Outlet />
    </AppContainer>
  );
};

export default App;
