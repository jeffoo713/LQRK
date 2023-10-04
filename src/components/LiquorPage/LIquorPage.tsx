import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import LiquorTopBar from './LiquorTopBar';
import GlobalContext from '../../stateManagement/globalContext';
import LiquorItem from './LIquorItem';

type LiquorPageType = {
  liquorType: LiquorType;
};

const StyledLiquorContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; 
`;

const LiquorPage: React.FC<LiquorPageType> = ({ liquorType }: LiquorPageType) => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  return (
    <Fragment>
      <LiquorTopBar liquorType={liquorType} />
      <StyledLiquorContentBox>
        {liquorState[liquorType].map(liquor => (
          <LiquorItem key={liquor.id} liquor={liquor} />
        ))}
      </StyledLiquorContentBox>
    </Fragment>
  );
};

export default LiquorPage;
