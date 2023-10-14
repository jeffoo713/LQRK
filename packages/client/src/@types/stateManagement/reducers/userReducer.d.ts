type UserActionPayloadType = {
  userId: number;
  username: string;
};

type UserActionType = {
  type: string;
  payload?: UserActionPayloadType;
};

type UserStateType = {
  userId: number;
  username: string;
};
