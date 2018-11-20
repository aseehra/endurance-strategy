import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
  FETCH_RACE_ENTRIES,
  FETCH_RACE_ENTRIES_FAILURE,
  FETCH_RACE_ENTRIES_SUCCESS,
} from '../actions/types';

const defaultState = {
  races: {},
  entries: [],
  loading: false,
  error: null,
};

export default function reducer(state = defaultState, action) {
  if (action.type === FETCH_RACES) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === FETCH_RACES_SUCCESS) {
    const { races } = action;
    return {
      ...state,
      races: races.reduce((acc, race) => {
        acc[race.id] = race;
        return acc;
      }, {}),
      loading: false,
      error: null,
    };
  }

  if (action.type === FETCH_RACES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      loading: false,
      error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      loading: false,
      error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_SUCCESS) {
    const { entries } = action;
    return {
      ...state,
      loading: false,
      error: null,
      entries,
    };
  }

  return state;
}

export const selectors = {
  getRaces: state => state.races,
  getRaceEntries: state => state.entries,
  getLoading: state => state.loading,
};
