import { LiquorActionTypeEnum } from './liquorActionTypeEnums';

export const INITIAL_LIQUOR_STATE: LiquorStateType = {
  liquors: [],
};

const isLiquorActionType = (action: ActionType): action is LiquorActionType => {
  return action.type in LiquorActionTypeEnum;
};

export const liquorReducer = (state: LiquorStateType, action: ActionType): LiquorStateType => {
  if (!isLiquorActionType(action)) return { ...state };

  switch (action.type) {
    case LiquorActionTypeEnum.FETCH_LIQUORS:
      return {
        ...state,
        liquors: action.payload || [],
      };
    default:
      return { ...state };
  }
};
