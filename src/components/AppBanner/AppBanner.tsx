import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const AppBannerContainer = styled.div<{ $signedIn: boolean }>`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ $signedIn }) =>
    $signedIn &&
    `
    background-color: #f0f8ff;
    padding: 1rem;
  `}
`;

const AppBanner: React.FC<AppBannerType> = (props: AppBannerType) => {
  const { signedIn } = props;

  return (
    <AppBannerContainer $signedIn={signedIn}>{signedIn ? <NavBar /> : <h1>Welcome to LQRK</h1>}</AppBannerContainer>
  );
};

export default AppBanner;
