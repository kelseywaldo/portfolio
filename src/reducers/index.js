import { GET_PROJECTS_LIST_SUCCESS } from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_PROJECTS_LIST_SUCCESS:
      return {
        ...state,
        projects: action.projects
      };
    default:
      return state
  }
}
