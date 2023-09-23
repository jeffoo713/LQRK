import { UserActionTypeEnum } from './userActionTypeEnums';

const localstorageUser: UserStateType = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

export const INITIAL_USER_STATE: UserStateType = {
  userId: localstorageUser?.userId || -1,
  username: localstorageUser?.username || '',
};

const isUserActionType = (action: ActionType): action is UserActionType => {
  return action.type in UserActionTypeEnum;
};

export const userReducer = (state: UserStateType, action: ActionType): UserStateType => {
  if (!isUserActionType(action)) return { ...state };

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
