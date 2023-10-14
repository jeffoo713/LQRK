import React, { Fragment, useMemo, useState } from 'react';
import { COLORS } from '../../assets/styles';
import { useParams } from 'react-router-dom';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import SlideOverlay from './SlideOverlay';
import styled from 'styled-components';
import Button from '../shared/Button';

const StyledAddLiuorSlide = styled.div<{ $display: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 550px;
  height: 100vh;
  background-color: ${COLORS.WHITE};
  border-right: 1px solid black;
  transform: ${props => (props.$display ? 'translateX(0)' : 'translateX(-100%)')};
  transition: 0.5s;
  overflow: hidden;
  z-index: 10;
  padding: 1rem;
`;

const StyledSlideCloseButton = styled.span`
  position: absolute;
  transform: transformX(-100%);
  top: 0;
  right: 0;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledInputGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  border: none;
  font-size: 1.4rem;
  padding: 0.2rem;
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

type AddLiquorSlideType = {
  display: boolean;
  setDisplayAddLiquor: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLiquorSlide: React.FC<AddLiquorSlideType> = ({
  display,
  setDisplayAddLiquor,
}: AddLiquorSlideType) => {
  const { liquorType } = useParams();

  const [liquorFormInput, setLiquorFormInput] = useState<LiquorFormInput>({ name: '' });

  const liquorTypeSingular = useMemo(() => {
    const liquorTypeName = TranslatedLiquorTypeEnums[liquorType! as LiquorType];
    return liquorTypeName.substring(0, liquorTypeName.length - 1);
  }, [liquorType]);

  const handleLiquorFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(liquorFormInput);
  };

  const handleLiquorFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLiquorFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <StyledAddLiuorSlide $display={display}>
        <h2>{`Add ${liquorTypeSingular}`}</h2>
        <StyledSlideCloseButton onClick={() => setDisplayAddLiquor(false)}>X</StyledSlideCloseButton>
        <form onSubmit={handleLiquorFormSubmit}>
          <input type='text' name='type' value={liquorType} hidden readOnly />
          <StyledInputGroup>
            <StyledInput
              type='text'
              name='name'
              autoComplete='off'
              placeholder=''
              onChange={handleLiquorFormChange}
            />
            <StyledLabel>Name</StyledLabel>
          </StyledInputGroup>
          <Button type='submit'>Save liquor</Button>
        </form>
      </StyledAddLiuorSlide>
      <SlideOverlay display={display} onClick={() => setDisplayAddLiquor(false)} />
    </Fragment>
  );
};

export default AddLiquorSlide;
