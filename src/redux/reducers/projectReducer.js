import { projectActionTypes } from '../actions/projectActionCreators';

const DEFAULT_STATE = {
  projects: [],
  totalProjects: 0,
};
export const projectReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case projectActionTypes.GET_ALL_PROJECT_SUCCESS:
      return { ...state, projects: action.payload?.projects, totalProjects: action.payload?.totalItems };
    default:
      return state;
  }
};
