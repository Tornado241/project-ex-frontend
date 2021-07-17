import { projectActionTypes } from '../actions/projectActionCreators';

const DEFAULT_STATE = {
  projects: [],
  totalProjects: 0,
  isLoadingListProjects: false,
  isLoadingListProjectsDetail: false,
};
export const projectReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case projectActionTypes.CREATE_PROJECT_ERROR:
      return { ...state, isLoadingListProjectsDetail: false };
    case projectActionTypes.CREATE_PROJECT_START:
      return { ...state, isLoadingListProjectsDetail: true };

    case projectActionTypes.GET_ALL_PROJECT_START:
      return { ...state, isLoadingListProjects: true };
    case projectActionTypes.GET_ALL_PROJECT_ERROR:
      return { ...state, isLoadingListProjects: false };
    case projectActionTypes.GET_ALL_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload?.projects,
        totalProjects: action.payload?.totalItems,
        isLoadingListProjects: false,
      };
    case projectActionTypes.CREATE_PROJECT_SUCCESS: {
      return { ...state, isLoadingListProjectsDetail: false };
    }
    default:
      return state;
  }
};
