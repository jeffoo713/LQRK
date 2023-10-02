import React, { useContext } from 'react';
import styled from 'styled-components';
import LiquorTopBar from './LiquorTopBar';
import GlobalContext from '../../stateManagement/globalContext';

type LiquorPageType = {
  liquorType: LiquorType;
};

const StyledLiquorContentBox = styled.div``;

const LiquorPage: React.FC<LiquorPageType> = ({ liquorType }: LiquorPageType) => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  return (
    <StyledLiquorContentBox>
      <LiquorTopBar liquorType={liquorType} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'wrap' }}>
        {liquorState[liquorType].map(r => (
          <div key={r.id} style={{ width: '150px', aspectRatio: '1 / 1', border: '1px solid black' }}>
            <p>{r.name}</p>
          </div>
        ))}
      </div>
    </StyledLiquorContentBox>
  );
};

export default LiquorPage;
