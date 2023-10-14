class LiquorProcessor {
  getSortedLiquorsByType(liquors: Liquor[]): LiquorStateType {
    const sorted: LiquorStateType = {
      categories: new Set<LiquorType>(),
      beer: [],
      wine: [],
      spirit: [],
      liqueur: [],
      asian_spirit: [],
      others: [],
    };

    liquors.forEach(liquor => {
      sorted[liquor.liquorType].push(liquor);
      sorted.categories.add(liquor.liquorType);
    });

    return sorted;
  }
}

export const liquorProcessor = new LiquorProcessor();
