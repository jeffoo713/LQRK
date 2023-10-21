import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/styles';

type ButtonType = {
  children: ReactElement | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: { [key: string]: string };
  onClick?: () => void;
};

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: ${COLORS.FORM.BTN};
  color: ${COLORS.WHITE};
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background-color: ${COLORS.FORM.ACTIVATED};
  }
`;

const Button: React.FC<ButtonType> = ({ children, ...otherButtonProps }: ButtonType) => {
  return <StyledButton {...otherButtonProps}>{children}</StyledButton>;
};

export default Button;
