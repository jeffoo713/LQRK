import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import { STYLES, COLORS } from '../../assets/styles';

const AppBannerContainer = styled.div<{ $signedIn: boolean }>`
  ${STYLES.FLEX_COLUMN_CENTER}
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;

  ${({ $signedIn }) =>
    $signedIn &&
    `
    background-color: ${COLORS.WHITE};
    padding: 1rem;
  `}
`;

const AppBanner: React.FC<AppBannerType> = (props: AppBannerType) => {
  const { signedIn } = props;

  return (
    <AppBannerContainer $signedIn={signedIn}>
      {signedIn ? <NavBar /> : <h1>Welcome to LQRK</h1>}
    </AppBannerContainer>
  );
};

export default AppBanner;
