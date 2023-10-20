import React, { Fragment, useMemo, useState } from 'react';
import { COLORS } from '../../assets/styles';
import { useParams } from 'react-router-dom';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import SlideOverlay from './SlideOverlay';
import styled from 'styled-components';
import Button from '../shared/Button';
import InputBox from '../shared/InputBox';

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

type AddLiquorSlideType = {
  display: boolean;
  setDisplayAddLiquor: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLiquorSlide: React.FC<AddLiquorSlideType> = ({
  display,
  setDisplayAddLiquor,
}: AddLiquorSlideType) => {
  const { liquorType } = useParams();

  const [liquorFormInput, setLiquorFormInput] = useState<LiquorFormInput>({
    name: '',
    year: '',
    country: '',
    alcohol_percentage: '',
    rating: '',
  });

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
          <InputBox type='text' name='name' onChange={handleLiquorFormChange} />
          <InputBox type='number' name='year' onChange={handleLiquorFormChange} />
          <InputBox type='text' name='country' onChange={handleLiquorFormChange} />
          <InputBox type='number' name='alcohol_percentage' onChange={handleLiquorFormChange} />
          <InputBox type='number' name='rating' onChange={handleLiquorFormChange} />
          <Button type='submit'>Save liquor</Button>
        </form>
      </StyledAddLiuorSlide>
      <SlideOverlay display={display} onClick={() => setDisplayAddLiquor(false)} />
    </Fragment>
  );
};

export default AddLiquorSlide;
