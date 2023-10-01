import userService from '../../services/userService';
import localstorageService from '../../services/localstorageService';

export const getUserLiquorData = async () => {
  const userId = localstorageService.userData!.userId;
  const liquors = await userService.getUserLiquorData(userId);

  return liquors;
};
