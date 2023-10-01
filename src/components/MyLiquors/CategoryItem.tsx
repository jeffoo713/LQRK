import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import beerImg from '../../assets/images/beerMenuImg.png';
import wineImg from '../../assets/images/wineMenuImg.png';
import spiritImg from '../../assets/images/spiritMenuImg.png';
import liqueurImg from '../../assets/images/liqueurMenuImg.png';
import asianSpiritImg from '../../assets/images/asianSpiritMenuImg.png';
import othersImg from '../../assets/images/othersMenuImg.png';
import addImg from '../../assets/images/addImgg.png';
import GlobalContext from '../../stateManagement/globalContext';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import { STYLES, COLORS } from '../../assets/styles';

type CategoryItemType = {
  categoryName: LiquorType;
  inUse: boolean;
};

const StyledCategoryItem = styled.div`
  ${STYLES.FLEX_COLUMN_CENTER}
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  border: 1px solid black;
  opacity: 90%;

  &:hover {
    .use-info-overlay {
      display: flex;
      background-color: black;
      opacity: 50%;
    }

    .add-overlay {
      display: block;
      opacity: 50%;
    }
  }

  .use-info-overlay {
    display: none;
  }

  .add-overlay {
    display: none;
  }
`;

const UseInfoOverlay = styled.div`
  ${STYLES.FLEX_COLUMN_CENTER}
  aspect-ratio: 1 / 1;
  width: 100%;
  position: relative;

  .category-info {
    ${STYLES.FLEX_COLUMN_CENTER}
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    white-space: nowrap;
    color: ${COLORS.WHITE};
    font-size: 2.125rem;
    font-weight: 600;
  }

  .category-count {
    font-size: 1.875rem;
    font-weight: 600;
  }
`;

const AddOverlay = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-image: url(${addImg});
  background-size: cover;
`;

const CATEGORY_IMG = {
  beer: beerImg,
  wine: wineImg,
  spirit: spiritImg,
  liqueur: liqueurImg,
  asian_spirit: asianSpiritImg,
  others: othersImg,
};

const CategoryItem: React.FC<CategoryItemType> = ({ categoryName, inUse }: CategoryItemType) => {
  const {
    state: { liquorState },
  } = useContext(GlobalContext);

  return (
    <StyledCategoryItem style={{ backgroundImage: `url(${CATEGORY_IMG[categoryName]})`, backgroundSize: 'cover' }}>
      {inUse ? (
        <UseInfoOverlay className='use-info-overlay'>
          <Link to={`${categoryName}`} style={{ width: '100%', height: '100%' }}>
            <div className='category-info'>
              <p className='category-name'>{TranslatedLiquorTypeEnums[categoryName]}</p>
              <p className='category-count'>{`(${liquorState[categoryName].length})`}</p>
            </div>
          </Link>
        </UseInfoOverlay>
      ) : (
        <AddOverlay className='add-overlay' />
      )}
    </StyledCategoryItem>
  );
};

export default CategoryItem;
