import { all } from 'redux-saga/effects';
import { watchProject } from './sagas/projectSaga';

function* rootSaga() {
  yield all([watchProject()]);
}
export default rootSaga;
