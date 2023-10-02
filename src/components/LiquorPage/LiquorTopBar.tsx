import React from 'react';
import styled from 'styled-components';
import { TranslatedLiquorTypeEnums } from '../../enums/liquorEnums/liquorTypeEnum';
import Button from '../shared/Button';

const StyledLiquorPageTopBar = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type LiquorTopBarType = {
  liquorType: LiquorType;
};

const LiquorTopBar: React.FC<LiquorTopBarType> = ({ liquorType }: LiquorTopBarType) => {
  return (
    <StyledLiquorPageTopBar>
      <h2>{TranslatedLiquorTypeEnums[liquorType]}: </h2>
      <Button>
        <span>
          <strong>+</strong> ADD LIQUOR
        </span>
      </Button>
    </StyledLiquorPageTopBar>
  );
};

export default LiquorTopBar;
