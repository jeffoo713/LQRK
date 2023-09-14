import { UserActionTypeEnum } from './userActionTypeEnums';

export const INITIAL_USER_STATE = {
  userId: -1,
  username: '',
};

export const userReducer = (state: UserStateType, action: UserActionType): UserStateType => {
  switch (action.type) {
    case UserActionTypeEnum.USER_SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
