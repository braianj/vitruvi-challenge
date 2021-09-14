import { combineReducers } from 'redux';
import { list } from './list.reducer';
import { modal } from './modal.reducer';
/**
 * Combine all reducers to make available to the Store
 * @type {Reducer<CombinedState<unknown>>}
 */
export const rootReducer = combineReducers({
    list,
    modal
});

/**
 * Export type RootState for use it in the component
 */
export type RootState = ReturnType<typeof rootReducer>