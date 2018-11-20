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
  entries: {},
  racesLoading: false,
  entriesLoading: false,
  error: null,
};

export default function reducer(state = defaultState, action) {
  if (action.type === FETCH_RACES) {
    return {
      ...state,
      racesLoading: true,
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
      racesLoading: false,
      error: null,
    };
  }

  if (action.type === FETCH_RACES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      racesLoading: false,
      error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES) {
    return {
      ...state,
      entriesLoading: true,
      error: null,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      entriesLoading: false,
      error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_SUCCESS) {
    const { raceId, entries } = action;
    return {
      ...state,
      entriesLoading: false,
      error: null,
      entries: {
        ...state.entries,
        [raceId]: entries,
      },
    };
  }

  return state;
}

export const selectors = {
  getRaces: state => state.races,
  getRaceEntries: state => state.entries,
  getRacesLoading: state => state.racesLoading,
  getEntriesLoading: state => state.entriesLoading,
};
