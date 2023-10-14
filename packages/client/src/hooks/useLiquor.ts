import { useContext } from 'react';
import GlobalContext from '../stateManagement/globalContext';

const useLiquor = () => {
  const { state, dispatch } = useContext(GlobalContext);
}
