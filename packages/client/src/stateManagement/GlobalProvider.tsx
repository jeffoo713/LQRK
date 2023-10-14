import React, { useReducer } from 'react';
import GlobalContext, { INITIAL_GLOBAL_STATE } from './globalContext';
import { globalReducer } from './reducers/globalReducer';

type GlobalProviderProps = {
  children: React.ReactNode;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_GLOBAL_STATE);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
