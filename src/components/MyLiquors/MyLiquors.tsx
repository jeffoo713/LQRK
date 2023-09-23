import React, { Fragment, useContext, useEffect } from 'react';
import styled from 'styled-components';
import userService from '../../services/userService';
import GlobalContext from '../../stateManagement/globalContext';
import { LiquorActionTypeEnum } from '../../stateManagement/reducers/liquorReducer/liquorActionTypeEnums';
import Button from '../shared/Button';

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

const StyledLiquorList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledLiquorItem = styled.div`
  aspect-ratio: 1 / 1;
  width: 19%;

  border: 1px solid black;
`;

// Todo: when initial rendering, make API call to fetch user's liquors with token in localstorage.
// if 401 status is returned, sign out the user and redirect to sign-in page.
// if 200 status is returned, display the liquors.
const MyLiquors = () => {
  const {
    state: {
      userState: { userId },
      liquorState: { liquors },
    },
    dispatch,
  } = useContext(GlobalContext);

  console.log(liquors);
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
      <StyledLiquorList>
        {liquors.map(e => (
          <StyledLiquorItem key={e.id}>{e.name}</StyledLiquorItem>
        ))}
      </StyledLiquorList>
    </StyledMyLiquors>
  );
};

export default MyLiquors;
