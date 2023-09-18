import React from 'react';
import styled from 'styled-components';

const AppBannerContainer = styled.h1`
  align-items: center;
  margin-bottom: 2rem;
`;

const AppBanner: React.FC<AppBannerType> = (props: AppBannerType) => {
  const { signedIn } = props;
  return <AppBannerContainer>{signedIn ? 'LQRK' : 'Welcome to LQRK'}</AppBannerContainer>;
};

export default AppBanner;
