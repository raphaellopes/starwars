// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Locals
import { RootStateType as StateType } from '..';
import { PaginationReducersType } from './types';
import * as actions from './actions';

export const usePaginationHook = (reducerKey: PaginationReducersType) => {
  const dispatch = useDispatch();
  const state = (state: StateType) => state.pagination[reducerKey];
  const { pages, currentPage, totalPages } = useSelector(state);

  // dispatchers
  const setCurrentPage = (page: number) =>
    dispatch(actions.paginationSetPage({ currentPage: page }, { reducerKey }));

  return {
    pages,
    currentPage,
    totalPages,
    dispatchers: { setCurrentPage },
  };
};
