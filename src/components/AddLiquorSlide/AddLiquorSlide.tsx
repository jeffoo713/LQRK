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
`;

const StyledSlideCloseButton = styled.span`
  position: absolute;
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
        <h3>{`Add ${liquorTypeSingular}`}</h3>
        <span onClick={() => setDisplayAddLiquor(false)}>X</span>
      </StyledAddLiuorSlide>
      <SlideOverlay display={display} onClick={() => setDisplayAddLiquor(false)} />
    </Fragment>
  );
};

export default AddLiquorSlide;
