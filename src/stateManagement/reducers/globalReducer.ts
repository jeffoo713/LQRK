import { userReducer } from './userReducer/userReducer';

export const globalReducer = (state: GlobalStateType, action: ActionType): GlobalStateType => ({
  userState: userReducer(state.userState, action),
});
