import { chartActions } from './reducers';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as API from '../api/charts';
import { ChartDataItem, ChartDataResponse } from '../api/charts';

export function* getDataSaga() {
	console.log("getDataSaga 실행");
	
	const { getDataSuccess, getDataFailure } = chartActions;
	try {
	  const response: ChartDataResponse = yield call(API.fetchChartData);
	  console.log(response.data[0]);
	  console.log("response.data[0].category");
	  console.log(response.data[0][1]);

	  yield put(getDataSuccess(response));
	} catch (err) {
	  yield put(getDataFailure(err));
	}
  }

export function* chartSaga() {
  const { getData } = chartActions;
  yield takeEvery(getData, getDataSaga);
}
