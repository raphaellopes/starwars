// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { CharactersStatusType } from './types';
import * as actions from './actions';

export * from './types';
export const useCharacterHook = () => {
  const dispatch = useDispatch();
  const state = (state: StateType) => state.characters;
  const { status, data, loading } = useSelector(state);

  // dispatchers
  const setStatus = (value: CharactersStatusType) =>
    dispatch(actions.charactersStatus(value));

  const request = () => dispatch(actions.charactersFetch());

  return {
    status,
    loading,
    data,
    dispatchers: { setStatus, request },
  };
};
