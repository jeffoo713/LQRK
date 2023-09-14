import { userReducer } from './reducers/userReducer/userReducer';

export const globalReducer = (state: GlobalStateType, action: ActionType): GlobalStateType => ({
  userState: userReducer(state.userState, action),
});
