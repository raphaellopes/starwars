// types
export enum Types {
  PAGINATION_DATA = 'pagination/data',
  PAGINATION_SET_PAGE = 'pagination/set-page',
}

// types
export type PaginationReducersType = 'characters';

export interface PaginationItemType {
  pages: {
    [key: number]: {
      ids: string[];
    };
  };
  totalPages?: number;
  currentPage: number;
}

export type PaginationStateType = {
  [key: string]: PaginationItemType;
};

// actions
export interface PaginationDataAction {
  type: typeof Types.PAGINATION_DATA;
  payload: { ids: string[]; page: number; totalPages?: number };
  meta: { reducerKey: PaginationReducersType };
}

export interface PaginationSetPageAction {
  type: typeof Types.PAGINATION_SET_PAGE;
  payload: { currentPage: number };
  meta: { reducerKey: PaginationReducersType };
}

export type PaginationActionTypes =
  | PaginationDataAction
  | PaginationSetPageAction;
