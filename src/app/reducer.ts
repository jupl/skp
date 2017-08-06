import {LocationState} from 'redux-first-router'
import {createReducerCreator} from '../common/reducer'
import * as posts from '../posts/reducer'

/** Structure of entire state */
export type RootState = State & posts.State

/** Structure of application state */
export interface State {
  location: LocationState
}

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<RootState>({
  posts: posts.reducer,
})
