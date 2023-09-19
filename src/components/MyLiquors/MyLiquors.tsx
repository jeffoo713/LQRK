import React from 'react';
import styled from 'styled-components';

const StyledMyLiquors = styled.div`
  width: 85vw;
  max-width: 1100px;
`;

const StyledMyLiquorsTopBar = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAddLiquorButton = styled.button`
  padding: 0.4rem 0.5rem;
  border: none;
  background-color: #677fb1;
  color: #f0f8ff;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background-color: #556ba0;
  }
`;

const StyledLiquorList = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledLiquorItem = styled.div`
  aspect-ratio: 1 / 1;
  width: 19%;

  border: 1px solid black;
`;

const MyLiquors = () => {
  return (
    <StyledMyLiquors>
      <StyledMyLiquorsTopBar>
        <h2>My Liquors: </h2>
        <StyledAddLiquorButton>
          <strong>+</strong> ADD LIQUOR
        </StyledAddLiquorButton>
      </StyledMyLiquorsTopBar>
      <StyledLiquorList>
        {['Yellowdog', 'BlueBuck', 'Revenge', 'Honey Larger', 'Strange fellows', 'Panda', 'Baisu'].map(e => (
          <StyledLiquorItem key={e}>{e}</StyledLiquorItem>
        ))}
      </StyledLiquorList>
    </StyledMyLiquors>
  );
};

export default MyLiquors;
