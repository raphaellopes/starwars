// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { usePaginationHook } from '../pagination';
import { PaginationReducersType } from '../pagination/types';
import { CharactersStatusType, CharacterType } from './types';
import * as actions from './actions';

export * from './types';
export const useCharacterHook = () => {
  const dispatch = useDispatch();

  const state = (state: StateType) => state.characters;
  const { status, data, loading } = useSelector(state);
  const pagination = usePaginationHook(PaginationReducersType.Characters);

  const dataByPage = (page: number): CharacterType[] => {
    const ids = pagination.pages[page]?.ids || [];
    return Object.entries(data)
      .map(([key, item]) => ids.includes(key) && item)
      .filter((item) => item.id);
  };

  const byId = (id: string) => data[id];

  // dispatchers
  const setStatus = (value: CharactersStatusType) =>
    dispatch(actions.charactersStatus(value));

  const request = (id: string) => dispatch(actions.charactersFetch(id));

  return {
    status,
    loading,
    data,
    dataByPage,
    byId,
    dispatchers: { setStatus, request },
  };
};
