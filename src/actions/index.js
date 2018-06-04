import axios from 'axios';
import { GET_PROJECTS_LIST_SUCCESS } from './types';

const API_ROOT = 'https://cors.io/?https://www.behance.net/v2';
const BEHANCE_CLIENT_ID = 'xxxxxxxxxxxxxxx';

export function getProjectsList(project_id) {
  return function(dispatch) {
    return axios.get(`${API_ROOT}/users/kelseymcalpine/projects?client_id=${BEHANCE_CLIENT_ID}`).then(
      response => {
        dispatch({
          type: GET_PROJECTS_LIST_SUCCESS,
          projects: response.data.projects
        });
      }
    )
  }
}
