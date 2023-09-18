import React from 'react';
import styled from 'styled-components';

const StyledMyLiquors = styled.div`
  width: 85vw;
  max-width: 1100px;
`;

const StyledMyLiquorsTitle = styled.h2`
  margin-bottom: 1rem;
`;

const StyledLiquorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;

const StyledLiquorItem = styled.div`
  aspect-ratio: 1 / 1;
  width: 18%;

  border: 1px solid black;
`;

const MyLiquors = () => {
  return (
    <StyledMyLiquors>
      <StyledMyLiquorsTitle>My Liquors: </StyledMyLiquorsTitle>
      <StyledLiquorList>
        {['Yellowdog', 'BlueBuck', 'Revenge', 'Honey Larger', 'Strange fellows', 'Panda', 'Baisu'].map(e => (
          <StyledLiquorItem key={e}>{e}</StyledLiquorItem>
        ))}
      </StyledLiquorList>
    </StyledMyLiquors>
  );
};

export default MyLiquors;
