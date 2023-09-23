type Liquor = {
  id: string;
  name: string;
  liquorType: string;
  rating: number;
};

type LiquorStateType = {
  liquors: Liquor[];
};

type LiquorActionPayloadType = Liquor[];

type LiquorActionType = {
  type: string;
  payload?: LiquorActionPayloadType;
};
