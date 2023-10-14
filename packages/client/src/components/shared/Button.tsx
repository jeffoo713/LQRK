import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/styles';

type ButtonType = {
  children: ReactElement | string;
  forSignIn?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
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

const Button: React.FC<ButtonType> = ({ children, forSignIn, ...otherButtonProps }: ButtonType) => {
  return (
    <StyledButton $forSignIn={forSignIn} {...otherButtonProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
