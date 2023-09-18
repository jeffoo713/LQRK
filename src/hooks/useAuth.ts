import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../stateManagement/globalContext';

export const useAuth = () => {
  const { state } = useContext(GlobalContext);
  const {
    userState: { userId, username },
  } = state;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(!!userId && !!username);
  }, [userId, username]);

  return { isLoggedIn };
};
