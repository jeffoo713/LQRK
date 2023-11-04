import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/styles';

const StyledInputGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.4rem;
  padding: 0 0.2rem;
  background-color: unset;
  color: ${COLORS.BLACK};
  border-bottom: 2.2px solid ${COLORS.SILVER};
  z-index: 15;

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border-color: ${COLORS.FORM.ACTIVATED};
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    color: ${COLORS.FORM.ACTIVATED};
    transform: translate(0.3rem, -1rem);
    font-size: 0.8rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  color: ${COLORS.SILVER};
  transform: translateX(0.3rem);
  transition: 0.4s;
  z-index: 13;
`;

type InputBoxType = {
  type: string;
  name: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<InputBoxType> = ({ ...otherInputProps }: InputBoxType) => {
  const titleCasedName = useCallback(
    (labelName: string) =>
      labelName.charAt(0).toUpperCase() + labelName.substring(1).replace('_', ' '),
    []
  );
  const numberInputProps = useMemo(
    () =>
      otherInputProps.type === 'number'
        ? { step: `${otherInputProps.name === 'year' ? '1' : '0.1'}` }
        : {},
    [otherInputProps.type, otherInputProps.name]
  );

  return (
    <StyledInputGroup>
      <StyledInput autoComplete='off' placeholder='' {...otherInputProps} {...numberInputProps} />
      <StyledLabel>{titleCasedName(otherInputProps.name)}</StyledLabel>
    </StyledInputGroup>
  );
};

export default InputBox;
