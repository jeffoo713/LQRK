import React from 'react';
import styled from 'styled-components';

type CategoryItemType = {
  categoryName: string;
  inUse: boolean;
};

const StyledCategoryItem = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: black;
  }

  border: 1px solid black;
`;

const CategoryItem: React.FC<CategoryItemType> = ({ categoryName }: CategoryItemType) => {
  return (
    <StyledCategoryItem>
      <h3>{categoryName}</h3>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
