import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
} from '../actions/types';

const defaultState = {
  races: {},
  racesLoading: false,
  racesError: null,
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
