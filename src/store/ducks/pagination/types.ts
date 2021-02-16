// types
export enum Types {
  PAGINATION_REQUEST = 'pagination/request',
  PAGINATION_DATA = 'pagination/data',
  PAGINATION_SET_PAGE = 'pagination/set-page',
}

// types
export type PaginationReducersType = 'characters' | 'species';

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
export interface PaginationRequestAction {
  type: typeof Types.PAGINATION_REQUEST;
  payload?: { page: number };
  meta: { reducerKey: PaginationReducersType };
}

export interface PaginationDataAction {
  type: typeof Types.PAGINATION_DATA;
  payload: { data: any[]; page: number; totalPages?: number };
  meta: { reducerKey: PaginationReducersType };
}

export interface PaginationSetPageAction {
  type: typeof Types.PAGINATION_SET_PAGE;
  payload: { currentPage: number };
  meta: { reducerKey: PaginationReducersType };
}

export type PaginationActionTypes =
  | PaginationRequestAction
  | PaginationDataAction
  | PaginationSetPageAction;
