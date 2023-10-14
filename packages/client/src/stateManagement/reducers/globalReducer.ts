import { userReducer } from './userReducer/userReducer';
import { liquorReducer } from './liquorReducer/liquorReducer';

export const globalReducer = (state: GlobalStateType, action: ActionType): GlobalStateType => ({
  userState: userReducer(state.userState, action),
  liquorState: liquorReducer(state.liquorState, action),
});
