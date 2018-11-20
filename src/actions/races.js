/* eslint-disable import/prefer-default-export */

import { API_BASE_URL } from '../config';
import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
  FETCH_RACE_ENTRIES,
  FETCH_RACE_ENTRIES_FAILURE,
  FETCH_RACE_ENTRIES_SUCCESS,
} from './types';
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

const fetchRaceEntriesStart = () => ({
  type: FETCH_RACE_ENTRIES,
});

export const fetchRaceEntriesSuccess = entries => ({
  type: FETCH_RACE_ENTRIES_SUCCESS,
  entries,
});

const fetchRaceEntriesFailure = error => ({
  type: FETCH_RACE_ENTRIES_FAILURE,
  error,
});

export const fetchRaceEntries = uri => (dispatch) => {
  dispatch(fetchRaceEntriesStart());

  fetch(`${API_BASE_URL}${uri}`)
    .then(normalizeErrors)
    .then(res => res.json())
    .then(data => dispatch(fetchRaceEntriesSuccess(data.entries)))
    .catch(error => dispatch(fetchRaceEntriesFailure(error)));
};
