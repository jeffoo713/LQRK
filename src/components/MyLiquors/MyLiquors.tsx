import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import userService from '../../services/userService';
import GlobalContext from '../../stateManagement/globalContext';
import { LiquorActionTypeEnum } from '../../stateManagement/reducers/liquorReducer/liquorActionTypeEnums';
import Button from '../shared/Button';
import CategoryMenu from './CategroyMenu';

const StyledMyLiquors = styled.div`
  width: 85vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMyLiquorsTopBar = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Todo: when initial rendering, make API call to fetch user's liquors with token in localstorage.
// if 401 status is returned, sign out the user and redirect to sign-in page.
// if 200 status is returned, display the liquors.
const MyLiquors: React.FC = () => {
  const {
    state: {
      userState: { userId },
      liquorState: { categories },
    },
    dispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    getUserLiquorData(userId);

    async function getUserLiquorData(userId: number) {
      const liquors = await userService.getUserLiquorData(userId);

      dispatch({
        type: LiquorActionTypeEnum.FETCH_LIQUORS,
        payload: liquors,
      });
    }
  }, []);

  return (
    <StyledMyLiquors>
      <StyledMyLiquorsTopBar>
        <h2>My liquors: </h2>
        <Button>
          <Fragment>
            <strong>+</strong> ADD LIQUOR
          </Fragment>
        </Button>
      </StyledMyLiquorsTopBar>
      <CategoryMenu />
    </StyledMyLiquors>
  );
};

export default MyLiquors;
