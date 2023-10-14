type LiquorType = 'beer' | 'wine' | 'spirit' | 'liqueur' | 'asian_spirit' | 'others';

type LiquorCategoryType = Set<LiquorType>;

type Liquor = {
  id: string;
  name: string;
  country: string;
  brand: string;
  year: number;
  liquorType: LiquorType;
  alcoholPercentage: number;
  rating: number;
  note: string;
};

type LiquorStateType = {
  [key in LiquorType]: Liquor[];
} & {
  categories: LiquorCategoryType;
};

type LiquorActionPayloadType = Liquor[];

type LiquorActionType = {
  type: string;
  payload?: LiquorActionPayloadType;
};
