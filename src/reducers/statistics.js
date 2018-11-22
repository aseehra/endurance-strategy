import {
  FETCH_ENTRY_STATISTICS,
  FETCH_ENTRY_STATISTICS_SUCCESS,
  FETCH_ENTRY_STATISTICS_FAILURE,
} from '../actions/types';

const defaultState = {
  statistics: {},
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

  return state;
}

export const selectors = {
  getLoading: state => entryId => state.loading[entryId],
  getStatistics: state => entryId => state.statistics[entryId],
};
