import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
  FETCH_RACE_ENTRIES,
  FETCH_RACE_ENTRIES_FAILURE,
  FETCH_RACE_ENTRIES_SUCCESS,
  UPDATE_RACE_ENTRIES_FILTER,
} from '../actions/types';

const defaultState = {
  races: {},
  entries: {},
  racesLoading: false,
  entriesLoading: false,
  racesError: null,
  entriesError: null,
  filter: '',
};

export default function reducer(state = defaultState, action) {
  if (action.type === FETCH_RACES) {
    return {
      ...state,
      racesLoading: true,
      racesError: null,
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
      racesError: null,
    };
  }

  if (action.type === FETCH_RACES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      racesLoading: false,
      racesError: error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES) {
    return {
      ...state,
      entriesLoading: true,
      entriesError: null,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_FAILURE) {
    const { error } = action;
    return {
      ...state,
      entriesLoading: false,
      entriesError: error,
    };
  }

  if (action.type === FETCH_RACE_ENTRIES_SUCCESS) {
    const { raceId, entries } = action;
    return {
      ...state,
      entriesLoading: false,
      entriesError: null,
      entries: {
        ...state.entries,
        [raceId]: entries.reduce((acc, entry) => {
          acc[entry.id] = entry;
          return acc;
        }, {}),
      },
    };
  }

  if (action.type === UPDATE_RACE_ENTRIES_FILTER) {
    const { filter } = action;
    return {
      ...state,
      filter,
    };
  }

  return state;
}

export const selectors = {
  getRaces: state => state.races,
  getRace: state => raceId => state.races[raceId],
  getRaceEntries: state => state.entries,
  getRacesLoading: state => state.racesLoading,
  getEntriesLoading: state => state.entriesLoading,
  getFilter: state => state.filter,
  getRaceEntriesError: state => state.entriesError,
};
