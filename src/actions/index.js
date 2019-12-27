import axios from 'axios';
import { GET_PROJECTS_LIST_SUCCESS } from './types';
import jsonp from 'jsonp';

const API_ROOT = 'https://www.behance.net/v2';
const BEHANCE_CLIENT_ID = 'RO19VGeyHz2nxjBUxjiO32Tr1FzKfqcb';

export function getProjectsList(project_id) {
  return function(dispatch) {
    return jsonp(`${API_ROOT}/users/kelseywaldo/projects?client_id=${BEHANCE_CLIENT_ID}`, null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          dispatch({
            type: GET_PROJECTS_LIST_SUCCESS,
            projects: data.projects
          });
        }
      }
    )
  }
}
