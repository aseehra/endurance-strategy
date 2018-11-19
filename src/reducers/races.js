import {
  FETCH_RACES,
  FETCH_RACES_FAILURE,
  FETCH_RACES_SUCCESS,
} from '../actions/types';

const defaultState = {
  races: [],
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
      races,
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

  return state;
}

export const selectors = {
  getRaces: state => state.races,
};
