import { SET_MAIN_ONBOARDING_SEEN } from './types';

const setMainOnboardingSeenSync = seen => ({
  type: SET_MAIN_ONBOARDING_SEEN,
  seen,
});

// eslint-disable-next-line import/prefer-default-export
export const setMainOnboardingSeen = seen => (dispatch) => {
  dispatch(setMainOnboardingSeenSync(seen));
  // TODO: set a cookie
};
