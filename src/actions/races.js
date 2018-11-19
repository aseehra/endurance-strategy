/* eslint-disable import/prefer-default-export */

import { API_BASE_URL } from '../config';
import { ApiError, FetchError } from '../errors';
import { FETCH_RACES, FETCH_RACES_FAILURE, FETCH_RACES_SUCCESS } from './types';

const fetchRacesStart = () => ({
  type: FETCH_RACES,
});

const fetchRacesSuccess = races => ({
  type: FETCH_RACES_SUCCESS,
  races,
});

const fetchRacesFailure = error => ({
  type: FETCH_RACES_FAILURE,
  error,
});

export const fetchRaces = () => (dispatch) => {
  dispatch(fetchRacesStart());

  fetch(`${API_BASE_URL}/api/races`)
    .then((res) => {
      if (!res.ok) {
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.startsWith('application/json')) {
          return res.json().then(data => Promise.reject(new ApiError(data.error)));
        }
        return Promise.reject(new FetchError(res));
      }

      return res.json();
    })
    .then(data => dispatch(fetchRacesSuccess(data.races)))
    .catch(error => dispatch(fetchRacesFailure(error)));
};
