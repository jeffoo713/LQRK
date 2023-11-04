import React, { Fragment, useMemo, useState } from 'react';
import { COLORS, STYLES } from '../../assets/styles';
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
  padding: 3rem;
  ${STYLES.FLEX_COLUMN_START_CENTER}
`;

const StyledSlideCloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  cursor: pointer;
`;

const StyledAddLiquorForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
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
    note: '',
  });

  const liquorTypeSingular = useMemo(() => {
    const liquorTypeName = TranslatedLiquorTypeEnums[liquorType! as LiquorType];
    return liquorTypeName.substring(0, liquorTypeName.length - 1);
  }, [liquorType]);

  const handleLiquorFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(liquorFormInput);
  };

  const handleLiquorFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setLiquorFormInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <StyledAddLiuorSlide $display={display}>
        <h2 style={{ width: '80%', marginTop: '5vh' }}>{`Add ${liquorTypeSingular}`}</h2>
        <StyledSlideCloseButton onClick={() => setDisplayAddLiquor(false)}>
          close X
        </StyledSlideCloseButton>
        <StyledAddLiquorForm onSubmit={handleLiquorFormSubmit}>
          <input type='text' name='type' value={liquorType} hidden readOnly />
          <InputBox type='text' name='name' onChange={handleLiquorFormChange} />
          <InputBox
            type='number'
            name='year'
            min={1000}
            max={3000}
            onChange={handleLiquorFormChange}
          />
          <InputBox type='text' name='country' onChange={handleLiquorFormChange} />
          <InputBox
            type='number'
            name='alcohol_percentage'
            min={0}
            max={99}
            onChange={handleLiquorFormChange}
          />
          <InputBox
            type='number'
            name='rating'
            min={0.0}
            max={5.0}
            onChange={handleLiquorFormChange}
          />
          <StyledTextarea
            rows={4}
            name='note'
            placeholder='Note'
            onChange={handleLiquorFormChange}
          />
          <Button
            type='submit'
            style={{
              width: '80%',
              fontSize: '1rem',
              padding: '0.5rem 1.5rem',
              border: 'none',
              margin: '0 auto',
            }}
          >
            Save liquor
          </Button>
        </StyledAddLiquorForm>
      </StyledAddLiuorSlide>
      <SlideOverlay display={display} onClick={() => setDisplayAddLiquor(false)} />
    </Fragment>
  );
};

export default AddLiquorSlide;
