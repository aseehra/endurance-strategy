/* eslint-disable import/prefer-default-export */

import { API_BASE_URL } from '../config';
import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
  FETCH_RACE_ENTRIES,
  FETCH_RACE_ENTRIES_FAILURE,
  FETCH_RACE_ENTRIES_SUCCESS,
  UPDATE_RACE_ENTRIES_FILTER,
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

export const fetchRaceEntriesSuccess = ({ raceId, entries }) => ({
  type: FETCH_RACE_ENTRIES_SUCCESS,
  raceId,
  entries,
});

const fetchRaceEntriesFailure = error => ({
  type: FETCH_RACE_ENTRIES_FAILURE,
  error,
});

export const fetchRaceEntries = id => (dispatch) => {
  dispatch(fetchRaceEntriesStart());

  fetch(`${API_BASE_URL}/api/races/${id}/entries`)
    .then(normalizeErrors)
    .then(res => res.json())
    .then(data => dispatch(fetchRaceEntriesSuccess(data)))
    .catch(error => dispatch(fetchRaceEntriesFailure(error)));
};

export const updateRaceEntryFilter = filter => ({
  type: UPDATE_RACE_ENTRIES_FILTER,
  filter,
});
