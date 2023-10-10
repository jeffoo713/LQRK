import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/styles';

type ButtonType = {
  children: ReactElement | string;
  forSignIn?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<{ $forSignIn?: boolean }>`
  width: ${props => (props.$forSignIn ? '50%' : 'fit-content')};
  border: ${props => (props.$forSignIn ? `1px solid ${COLORS.FORM.INPUT_BORDER};` : 'none')};
  font-size: ${props => props.$forSignIn && '1rem'};
  padding: 0.5rem;
  background-color: ${COLORS.FORM.BTN};
  color: ${COLORS.WHITE};
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background-color: ${COLORS.FORM.ACTIVATED};
  }
`;

const Button: React.FC<ButtonType> = ({ children, forSignIn, onClick }: ButtonType) => {
  return (
    <StyledButton $forSignIn={forSignIn} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
