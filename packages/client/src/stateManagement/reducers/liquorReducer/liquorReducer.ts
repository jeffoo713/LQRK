import { LiquorActionTypeEnum } from './liquorActionTypeEnums';
import { liquorProcessor } from '../../../helpers/liquorProcessor';
import { UserActionTypeEnum } from '../userReducer/userActionTypeEnums';

export const INITIAL_LIQUOR_STATE: LiquorStateType = {
  categories: new Set<LiquorType>(),
  beer: [],
  wine: [],
  spirit: [],
  liqueur: [],
  asian_spirit: [],
  others: [],
};

const isUserActionType = (action: ActionType): action is UserActionType => {
  return action.type in UserActionTypeEnum;
};

const isUserSignOut = (action: ActionType): action is UserActionType => {
  return action.type === UserActionTypeEnum.USER_SIGN_OUT;
};

export const liquorReducer = (state: LiquorStateType, action: ActionType): LiquorStateType => {
  if (isUserSignOut(action)) return INITIAL_LIQUOR_STATE;
  if (isUserActionType(action)) return { ...state };

  switch (action.type) {
    case LiquorActionTypeEnum.FETCH_LIQUORS:
      return {
        ...state,
        ...liquorProcessor.getSortedLiquorsByType(action.payload!),
      };
    default:
      return { ...state };
  }
};
