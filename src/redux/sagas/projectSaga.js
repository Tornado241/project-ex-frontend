import { put, takeLatest, delay } from 'redux-saga/effects';
import { createProjectAPI, deleteProjectAPI, getAllProjectAPI, updateProjectAPI } from '../../services/projectService';
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
    // yield delay(400);
    yield put(projectActions.createProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.createProjectError(e));
  }
}

function* updateProject(action) {
  try {
    const response = yield updateProjectAPI(action.body, action.id);
    // yield delay(400);
    yield put(projectActions.updateProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.updateProjectError(e));
  }
}

function* deleteProject(action) {
  try {
    const response = yield deleteProjectAPI(action.id);
    // yield delay(400);
    yield put(projectActions.deleteProjectSuccess(response));
  } catch (e) {
    yield put(projectActions.deleteProjectError(e));
  }
}

export function* watchProject() {
  yield takeLatest(projectActionTypes.GET_ALL_PROJECT_START, getAllProject);
  yield takeLatest(projectActionTypes.CREATE_PROJECT_START, createProject);
  yield takeLatest(projectActionTypes.UPDATE_PROJECT_START, updateProject);
  yield takeLatest(projectActionTypes.DELETE_PROJECT_START, deleteProject);
}
