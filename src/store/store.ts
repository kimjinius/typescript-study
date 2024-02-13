// store.ts
import { combineReducers } from 'redux';
import { chartReducer, ChartData } from './reducers';
import { all } from 'redux-saga/effects';
import { chartSaga } from './sagas';

export interface RootState {
  chartReducer: ChartData; 
}

const rootReducer = combineReducers({
  chartReducer,
});

export function* rootSaga() {
  yield all([chartSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
