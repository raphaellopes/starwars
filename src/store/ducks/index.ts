// Vendors
import { combineReducers } from 'redux';

// Locals
import { charactersReducer } from './characters';

const rootReducer = combineReducers({ characters: charactersReducer });

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
