import { UserActionTypeEnum } from './userActionTypeEnums';

const localstorageUser: UserStateType = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

export const INITIAL_USER_STATE = {
  userId: localstorageUser?.userId || -1,
  username: localstorageUser?.username || '',
};

export const userReducer = (state: UserStateType, action: UserActionType): UserStateType => {
  switch (action.type) {
    case UserActionTypeEnum.USER_SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case UserActionTypeEnum.USER_SIGN_OUT:
      return {
        ...state,
        userId: -1,
        username: '',
      };
    default:
      return { ...state };
  }
};
