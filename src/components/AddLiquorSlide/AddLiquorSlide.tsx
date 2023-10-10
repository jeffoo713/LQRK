import React, { Fragment, useMemo } from 'react';
import { COLORS } from '../../assets/styles';
import { useParams } from 'react-router-dom';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import SlideOverlay from './SlideOverlay';
import styled from 'styled-components';

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

const StyledInput = styled.input`
  border: none;
  font-size: 1.4rem;
  padding: 0.2rem;
  background-color: unset;
  color: ${COLORS.BLACK};
  border-bottom: 2.2px solid ${COLORS.SILVER};
  z-index: 15;

  &:focus {
    outline: none;
    border-color: ${COLORS.FORM.ACTIVATED};
  }

  &:focus ~ label {
    color: ${COLORS.FORM.ACTIVATED};
    transform: translate(0.3rem, -1rem);
    font-size: 0.9rem;
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

  const liquorTypeSingular = useMemo(() => {
    const liquorTypeName = TranslatedLiquorTypeEnums[liquorType! as LiquorType];
    return liquorTypeName.substring(0, liquorTypeName.length - 1);
  }, [liquorType]);

  return (
    <Fragment>
      <StyledAddLiuorSlide $display={display}>
        <h2>{`Add ${liquorTypeSingular}`}</h2>
        <StyledSlideCloseButton onClick={() => setDisplayAddLiquor(false)}>X</StyledSlideCloseButton>
        <form>
          <input type='text' name='type' value={liquorType} hidden readOnly />
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem', marginTop: '1rem' }}>
            <StyledInput type='text' name='name' />
            <StyledLabel>Name</StyledLabel>
          </div>
        </form>
      </StyledAddLiuorSlide>
      <SlideOverlay display={display} onClick={() => setDisplayAddLiquor(false)} />
    </Fragment>
  );
};

export default AddLiquorSlide;
