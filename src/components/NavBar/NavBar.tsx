import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

const StyledNavBar = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledSignOutButton = styled.p`
  position: absolute;
  width: fit-content;
  white-space: nowrap;
  transform: translateX(-100%);
  left: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  const { handleSignOut } = useAuth();

  return (
    <StyledNavBar>
      <h1>LQRK</h1>
      <span>Easy way to track your favourite drinks!</span>
      <StyledSignOutButton onClick={handleSignOut}>Sign out</StyledSignOutButton>
    </StyledNavBar>
  );
};

export default NavBar;
