import { LiquorActionTypeEnum } from './liquorActionTypeEnums';
import { liquorProcessor } from '../../../helpers/liquorProcessor';

export const INITIAL_LIQUOR_STATE: LiquorStateType = {
  categories: new Set<LiquorType>(),
  beer: [],
  wine: [],
  spirit: [],
  liqueur: [],
  asian_spirit: [],
  others: [],
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
        ...liquorProcessor.getSortedLiquorsByType(action.payload!),
      };
    default:
      return { ...state };
  }
};
