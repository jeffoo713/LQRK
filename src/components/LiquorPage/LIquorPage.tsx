import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../../stateManagement/globalContext';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import Button from '../shared/Button';
import BreadCrumnbs from '../BreadCrumbs/BreadCrumbs';

const StyledMyLiquorsTopBar = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LiquorPage = () => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  const { liquorType } = useParams();

  const isValidLiquorType = (liquorType: string | undefined): liquorType is LiquorType => {
    return !!liquorType && liquorType in TranslatedLiquorTypeEnums;
  };

  return (
    <div style={{ width: '85vw' }}>
      <BreadCrumnbs />
      {isValidLiquorType(liquorType) ? (
        <div>
          <StyledMyLiquorsTopBar>
            <h2>{TranslatedLiquorTypeEnums[liquorType]}: </h2>
            <Button>
              <span>
                <strong>+</strong> ADD LIQUOR
              </span>
            </Button>
          </StyledMyLiquorsTopBar>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'wrap' }}>
            {liquorState[liquorType].map(r => (
              <div key={r.id} style={{ width: '150px', aspectRatio: '1 / 1', border: '1px solid black' }}>
                <p>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Navigate to='..' relative='path' />
      )}
    </div>
  );
};

export default LiquorPage;
