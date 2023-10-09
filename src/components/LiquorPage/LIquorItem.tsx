import React, { useMemo } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/styles';

const StyledLiquorItem = styled.div`
  width: 170px;
  display: 'flex';
  flexdirection: 'column';
  justifycontent: 'center';
  margin-bottom: 1rem;
`;

const LiquorImageBox = styled.div<{ $imageUrl: string }>`
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid ${COLORS.BLACK};
  background-image: ${props => props.$imageUrl};
  background-size: 50% 170px;
  background-repeat: no-repeat;
  background-position: center;
`;

type LiquorItemType = {
  liquor: Liquor;
};

const LiquorItem: React.FC<LiquorItemType> = ({ liquor }: LiquorItemType) => {
  const truncatedName = (name: string) => {
    if (name.length > 15) return name.substring(0, 16) + '...';

    return name;
  };

  const useRandomNumber = () => useMemo(() => Math.floor(Math.random() * 200 + 1), []);

  return (
    <StyledLiquorItem>
      <LiquorImageBox $imageUrl={`url(https://images.punkapi.com/v2/${useRandomNumber()}.png)`} />
      <p>{truncatedName(liquor.name)}</p>
    </StyledLiquorItem>
  );
};

export default LiquorItem;
