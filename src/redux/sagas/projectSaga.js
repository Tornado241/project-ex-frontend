import { put, takeLatest, delay } from 'redux-saga/effects';
import { createProjectAPI, getAllProjectAPI } from '../../services/projectService';
import { projectActionTypes, projectActions } from '../actions/projectActionCreators';

function* getAllProject(action) {
  try {
    const response = yield getAllProjectAPI(action.params);
    yield delay(400);
    yield put(projectActions.getAllProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.getAllProjectError(e));
  }
}

function* createProject(action) {
  try {
    const response = yield createProjectAPI(action.body);
    yield delay(400);
    yield put(projectActions.createProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.createProjectError(e));
  }
}

export function* watchProject() {
  yield takeLatest(projectActionTypes.GET_ALL_PROJECT_START, getAllProject);
  yield takeLatest(projectActionTypes.CREATE_PROJECT_START, createProject);
}
