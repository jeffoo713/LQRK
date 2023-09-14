export const INITIAL_USER_STATE = {
  userId: -1,
  username: '',
};

export const userReducer = (state: UserStateType, action: UserActionType): UserStateType => {
  switch (action.type) {
    case 'USER_SIGN_IN':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
