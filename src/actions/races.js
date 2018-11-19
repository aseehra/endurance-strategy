/* eslint-disable import/prefer-default-export */

import { API_BASE_URL } from '../config';
import { FETCH_RACES, FETCH_RACES_FAILURE, FETCH_RACES_SUCCESS } from './types';
import { normalizeErrors } from '../utils/fetch';

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
    .then(normalizeErrors)
    .then(res => res.json())
    .then(data => dispatch(fetchRacesSuccess(data.races)))
    .catch(error => dispatch(fetchRacesFailure(error)));
};
