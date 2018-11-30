import { SET_IS_MOBILE, SET_MAIN_ONBOARDING_SEEN } from '../actions/types';

const defaultState = {
  mainOnboardingSeen: false,
  raceOnboardingSeen: false,
  isMobile: true,
};

export default function reducer(state = defaultState, action) {
  if (action.type === SET_MAIN_ONBOARDING_SEEN) {
    const { seen } = action;
    return {
      ...state,
      mainOnboardingSeen: seen,
    };
  }

  if (action.type === SET_IS_MOBILE) {
    const { isMobile } = action;
    return {
      ...state,
      isMobile,
    };
  }

  return state;
}

export const selectors = {
  getMainOnboardingSeen: state => state.mainOnboardingSeen,
  getRaceOnboardingSeen: state => state.raceOnboardingSeen,
  getIsMobile: state => state.isMobile,
};
