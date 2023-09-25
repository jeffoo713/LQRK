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
  categories: LiquorCategoryType;
  beer: Liquor[];
  wine: Liquor[];
  spirit: Liquor[];
  liqueur: Liquor[];
  asian_spirit: Liquor[];
  others: Liquor[];
};

type LiquorActionPayloadType = Liquor[];

type LiquorActionType = {
  type: string;
  payload?: LiquorActionPayloadType;
};
