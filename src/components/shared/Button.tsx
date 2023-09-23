import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/_colors';

type ButtonType = {
  children: ReactElement | string;
  forSignIn?: boolean;
};

const StyledAddLiquorButton = styled.button<{ $forSignIn?: boolean }>`
  width: ${props => (props.$forSignIn ? '50%' : 'fit-content')};
  border: ${props => (props.$forSignIn ? `1px solid ${COLORS.FORM.INPUT_BORDER};` : 'none')};
  font-size: ${props => props.$forSignIn && '1rem'};
  padding: 0.5rem;
  background-color: ${COLORS.FORM.BTN};
  color: ${COLORS.WHITE};
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background-color: ${COLORS.FORM.BTN_ACTIVATED};
  }
`;

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const { children, forSignIn } = props;

  return (
    <StyledAddLiquorButton $forSignIn={forSignIn}>
      {children}
    </StyledAddLiquorButton>
  );
};

export default Button;
