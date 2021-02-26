// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { usePaginationHook } from '../pagination';
import { PaginationReducersType } from '../pagination/types';
import { SpeciesStatusType, SpecieType } from './types';
import * as actions from './actions';

export * from './types';
export const useSpecieHook = () => {
  const dispatch = useDispatch();

  const state = (state: StateType) => state.species;
  const { status, data, loading } = useSelector(state);
  const pagination = usePaginationHook(PaginationReducersType.Species);

  const dataByPage = (page: number): SpecieType[] => {
    const ids = pagination.pages[page]?.ids || [];
    return Object.entries(data)
      .map(([key, item]) => ids.includes(key) && item)
      .filter((item) => item.id);
  };

  // dispatchers
  const setStatus = (value: SpeciesStatusType) =>
    dispatch(actions.speciesStatus(value));

  const request = (page?: number) => dispatch(actions.speciesFetch(page));

  return {
    status,
    loading,
    data,
    dataByPage,
    dispatchers: { setStatus, request },
  };
};
