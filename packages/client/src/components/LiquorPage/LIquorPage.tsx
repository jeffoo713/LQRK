import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import LiquorTopBar from './LiquorTopBar';
import GlobalContext from '../../stateManagement/globalContext';
import LiquorItem from './LiquorItem';
import AddLiquorSlide from '../AddLiquorSlide/AddLiquorSlide';

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

  const [displayAddLiquor, setDisplayAddLiquor] = useState<boolean>(false);

  return (
    <Fragment>
      <LiquorTopBar liquorType={liquorType} setDisplayAddLiquor={setDisplayAddLiquor} />
      <StyledLiquorContentBox>
        {liquorState[liquorType].map(liquor => (
          <LiquorItem key={liquor.id} liquor={liquor} />
        ))}
      </StyledLiquorContentBox>
      <AddLiquorSlide display={displayAddLiquor} setDisplayAddLiquor={setDisplayAddLiquor} />
    </Fragment>
  );
};

export default LiquorPage;
