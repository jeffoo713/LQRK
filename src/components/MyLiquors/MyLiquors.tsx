import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../../stateManagement/globalContext';
import { LiquorActionTypeEnum } from '../../stateManagement/reducers/liquorReducer/liquorActionTypeEnums';
import CategoryMenu from './CategroyMenu';

const StyledMyLiquors = styled.div`
  width: 85vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// Todo: when initial rendering, make API call to fetch user's liquors with token in localstorage.
// if 401 status is returned, sign out the user and redirect to sign-in page.
// if 200 status is returned, display the liquors.
const MyLiquors: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);

  const liquors = useLoaderData() as LiquorActionPayloadType;

  useEffect(() => {
    if (liquors) {
      dispatch({
        type: LiquorActionTypeEnum.FETCH_LIQUORS,
        payload: liquors,
      });
    }
  }, [dispatch, liquors]);

  return (
    <StyledMyLiquors>
      <CategoryMenu />
    </StyledMyLiquors>
  );
};

export default MyLiquors;
