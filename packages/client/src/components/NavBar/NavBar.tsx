import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../assets/styles';
import GlobalContext from '../../stateManagement/globalContext';

const StyledNavBar = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserSection = styled.div`
  position: absolute;
  width: fit-content;
  transform: translateX(-100%);
  left: 100%;
  white-space: nowrap;
  display: flex;

  :first-child {
    padding-right: 0.5rem;
    margin-right: 0.5rem;
    border-right: 1px solid ${COLORS.BLACK};
  }
`;

const StyledSignOutButton = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  const {
    state: {
      userState: { username },
    },
  } = useContext(GlobalContext);
  const { handleSignOut } = useAuth();

  return (
    <StyledNavBar>
      <h1>LQRK</h1>
      <span>Easy way to track your favourite drinks!</span>
      <StyledUserSection>
        <p>Hi, {username}!</p>
        <StyledSignOutButton onClick={handleSignOut}>Sign out</StyledSignOutButton>
      </StyledUserSection>
    </StyledNavBar>
  );
};

export default NavBar;
