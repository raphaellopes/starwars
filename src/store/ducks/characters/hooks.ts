// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { CharactersStatusType, CharacterType } from './types';
import * as actions from './actions';

export * from './types';
export const useCharacterHook = () => {
  const dispatch = useDispatch();
  const state = (state: StateType) => state.characters;
  const { status, data, loading, pagination } = useSelector(state);

  const dataByPage = (page: number): CharacterType[] => {
    const ids = pagination.pages[page]?.ids || [];
    return Object.entries(data)
      .map(([key, item]) => ids.includes(key) && item)
      .filter((item) => item.id);
  };

  // dispatchers
  const setStatus = (value: CharactersStatusType) =>
    dispatch(actions.charactersStatus(value));

  const request = (page?: number) => dispatch(actions.charactersFetch(page));

  const setCurrentPage = (page: number) =>
    dispatch(actions.charactersPage(page));

  return {
    status,
    loading,
    data,
    dataByPage,
    pagination,
    dispatchers: { setStatus, request, setCurrentPage },
  };
};
