import React from 'react';
import styled from 'styled-components';
import beerImg from '../../assets/images/beerMenuImg.png';

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
  cursor: pointer;
  border: 1px solid black;
  opacity: 90%;

  &:hover {
    background-color: grey;
    opacity: 70%;

    .category-name {
      display: block;
    }
  }

  .category-name {
    display: none;
  }
`;

const CategoryItem: React.FC<CategoryItemType> = ({ categoryName }: CategoryItemType) => {
  return (
    <StyledCategoryItem style={{ backgroundImage: `url(${beerImg})`, backgroundSize: 'cover' }}>
      <h3 className='category-name'>{categoryName}</h3>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
