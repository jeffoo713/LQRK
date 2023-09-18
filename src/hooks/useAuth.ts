import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../stateManagement/globalContext';
import { UserActionTypeEnum } from '../stateManagement/reducers/userReducer/userActionTypeEnums';
import localstorageService from '../services/localstorageService';

export const useAuth = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const {
    userState: { userId, username },
  } = state;

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsSignedIn(!!userId && !!username);
  }, [userId, username]);

  const handleAfterSignIn = (userData: SignInResponse) => {
    const {
      user: { id: userId, username },
      token,
    } = userData;

    localstorageService.storeUserInLocalStorage(userData.user, token);

    dispatch({
      type: UserActionTypeEnum.USER_SIGN_IN,
      payload: { userId, username },
    });
  };

  const handleSignOut = () => {
    localstorageService.removeUserInLocalstorage();

    dispatch({
      type: UserActionTypeEnum.USER_SIGN_OUT,
    });
  };

  return { isSignedIn, handleAfterSignIn, handleSignOut };
};
