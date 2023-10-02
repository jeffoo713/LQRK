import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import BreadCrumnbs from '../BreadCrumbs/BreadCrumbs';
import LiquorPage from './LiquorPage';

const StyledLiquorPageContainer = styled.div`
  width: 85vw;
`;

const LiquorPageContainer = () => {
  const { liquorType } = useParams();

  const isValidLiquorType = (liquorType: string | undefined): liquorType is LiquorType => {
    return Boolean(liquorType) && liquorType! in TranslatedLiquorTypeEnums;
  };

  return (
    <StyledLiquorPageContainer>
      <BreadCrumnbs />
      {isValidLiquorType(liquorType) ? <LiquorPage liquorType={liquorType} /> : <Navigate to='..' relative='path' />}
    </StyledLiquorPageContainer>
  );
};

export default LiquorPageContainer;
