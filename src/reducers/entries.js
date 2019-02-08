import {
  FETCH_RACE_ENTRIES,
  FETCH_RACE_ENTRIES_SUCCESS,
  FETCH_RACE_ENTRIES_FAILURE,
  UPDATE_RACE_ENTRIES_FILTER,
} from '../actions/types';

const defaultState = {
  entries: null,
  loading: false,
  error: null,
  filter: '',
};

export default function reducer(state = defaultState, action) {
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
      entries: entries.reduce((acc, entry) => {
        acc[entry.id] = entry;
        return acc;
      }, {}),
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
  getFilter: state => state.filter,
  getLoading: state => state.loading,
  getError: state => state.error,
  getEntries: state => state.entries,
  getEntry: state => entryId => state.entries && state.entries[entryId],
};
