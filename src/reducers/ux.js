import { SET_MAIN_ONBOARDING_SEEN } from '../actions/types';

const defaultState = {
  mainOnboardingSeen: false,
  raceOnboardingSeen: false,
};

export default function reducer(state = defaultState, action) {
  if (action.type === SET_MAIN_ONBOARDING_SEEN) {
    const { seen } = action;
    return {
      ...state,
      mainOnboardingSeen: seen,
    };
  }

  return state;
}

export const selectors = {
  getMainOnboardingSeen: state => state.mainOnboardingSeen,
  getRaceOnboardingSeen: state => state.raceOnboardingSeen,
};
