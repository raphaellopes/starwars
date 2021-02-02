// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { CharactersStatusType } from './types';
import * as actions from './actions';

export const useCharacterHook = () => {
  const dispatch = useDispatch();
  const state = (state: StateType) => state.characters;
  const { status, data } = useSelector(state);

  // dispatchers
  const setStatus = (value: CharactersStatusType) =>
    dispatch(actions.charactersStatus(value));

  return {
    status,
    data,
    dispatchers: { setStatus },
  };
};
