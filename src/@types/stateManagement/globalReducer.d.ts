type ActionType = {
  type: string;
  payload?: UserActionPayloadType;
};

type GlobalStateType = {
  userState: {
    userId: number;
    username: string;
  };
};
