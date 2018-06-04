import { GET_PROJECTS_LIST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  projects: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PROJECTS_LIST_SUCCESS: {
      let projects = [];

      action.projects.forEach((project, key) => {
        projects[key] = {
          id: project.id,
          name: project.name,
          tags: project.fields,
          cover_image: project.covers['404']
        };
        key++;
      });

      return {
        ...state,
        projects
      };
    }

    default:
      return state
  }
}
