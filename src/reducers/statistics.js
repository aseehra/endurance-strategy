import {
  FETCH_ENTRY_STATISTICS,
  FETCH_ENTRY_STATISTICS_SUCCESS,
  FETCH_ENTRY_STATISTICS_FAILURE,
  FETCH_ENTRY_STINTS,
  FETCH_ENTRY_STINTS_FAILURE,
  FETCH_ENTRY_STINTS_SUCCESS,
} from '../actions/types';

const defaultState = {
  statistics: {},
  stints: {},
  loading: {},
  error: null,
};

export default function reducer(state = defaultState, action) {
  const { type } = action;

  if (type === FETCH_ENTRY_STATISTICS) {
    const { entryId } = action;
    return {
      ...state,
      loading: { ...state.loading, [entryId]: true },
    };
  }

  if (type === FETCH_ENTRY_STATISTICS_SUCCESS) {
    const { entryId, ...data } = action;
    const { [entryId]: throwaway, ...loading } = state.loading;
    return {
      ...state,
      statistics: {
        ...state.statistics,
        [entryId]: data,
      },
      loading,
    };
  }

  if (type === FETCH_ENTRY_STATISTICS_FAILURE) {
    const { entryId, error } = action;
    const { [entryId]: throwaway, ...loading } = state.loading;
    return {
      ...state,
      loading,
      error,
    };
  }

  if (type === FETCH_ENTRY_STINTS) {
    const { entryId } = action;
    return {
      ...state,
      loading: { ...state.loading, [entryId]: true },
    };
  }

  if (type === FETCH_ENTRY_STINTS_FAILURE) {
    const { entryId, error } = action;
    const { [entryId]: throwaway, ...loading } = state.loading;
    return {
      ...state,
      loading,
      error,
    };
  }

  if (type === FETCH_ENTRY_STINTS_SUCCESS) {
    const { entryId, stints } = action;
    const { [entryId]: throwaway, ...loading } = state.loading;
    return {
      ...state,
      loading,
      stints: { ...state.stints, [entryId]: stints },
    };
  }

  return state;
}

export const selectors = {
  getLoading: state => entryId => state.loading[entryId],
  getStatistics: state => entryId => state.statistics[entryId],
  getStints: state => entryId => state.stints[entryId],
};
