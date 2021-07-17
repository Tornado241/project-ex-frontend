import { put, takeLatest } from 'redux-saga/effects';
import { getAllProjectAPI } from '../../services/projectService';
import { projectActionTypes, projectActions } from '../actions/projectActionCreators';

function* getAllProject(action) {
  try {
    const response = yield getAllProjectAPI(action.params);
    yield put(projectActions.getAllProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.getAllProjectError(e));
  }
}

export function* watchProject() {
  yield takeLatest(projectActionTypes.GET_ALL_PROJECT_START, getAllProject);
}
