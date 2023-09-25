import React, { useContext } from 'react';
import GlobalContext from '../../stateManagement/globalContext';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';
import { TranslatedLiquorTypeEnums } from './liquorTypeEnum';

type CategoryMenuType = {};

const StyledCategoryMenu = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;

  justify-content: center;
`;

const CategoryMenu: React.FC<CategoryMenuType> = ({}: CategoryMenuType) => {
  const {
    state: {
      liquorState: { categories },
    },
  } = useContext(GlobalContext);

  const allCategoryNames = ['beer', 'wine', 'spirit', 'liqueur', 'asian_spirit', 'others'] as const;

  const isCategoryInUse = (liquorType: LiquorType): boolean => categories.has(liquorType);

  return (
    <StyledCategoryMenu>
      {allCategoryNames.map(catName => (
        <CategoryItem
          {...{ className: catName }}
          key={catName}
          categoryName={TranslatedLiquorTypeEnums[catName]}
          inUse={isCategoryInUse(catName)}
        />
      ))}
    </StyledCategoryMenu>
  );
};

export default CategoryMenu;
