type ActionType = UserActionType | LiquorActionType;

type GlobalStateType = {
  userState: {
    userId: number;
    username: string;
  };
  liquorState: {
    liquors: Liquor[];
  };
};
