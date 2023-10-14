import React, { createContext } from 'react';
import { INITIAL_USER_STATE } from './reducers/userReducer/userReducer';
import { INITIAL_LIQUOR_STATE } from './reducers/liquorReducer/liquorReducer';

export const INITIAL_GLOBAL_STATE = {
  userState: INITIAL_USER_STATE,
  liquorState: INITIAL_LIQUOR_STATE,
};

const GlobalContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_GLOBAL_STATE,
  dispatch: () => null,
});

export default GlobalContext;
