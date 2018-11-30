import Cookies from 'universal-cookie';

import { SET_MAIN_ONBOARDING_SEEN } from './types';

const setMainOnboardingSeenSync = seen => ({
  type: SET_MAIN_ONBOARDING_SEEN,
  seen,
});

const ONBOARDING_COOKIE_NAME = 'onboarding_seen';

export const setMainOnboardingSeen = seen => (dispatch) => {
  dispatch(setMainOnboardingSeenSync(seen));

  const cookies = new Cookies();
  cookies.set(ONBOARDING_COOKIE_NAME, { main: true }, { path: '/' });
};

export const deserializeOnboardingCookies = () => (dispatch) => {
  const cookies = new Cookies();
  const cookie = cookies.get(ONBOARDING_COOKIE_NAME);
  if (cookie) {
    dispatch(setMainOnboardingSeenSync(cookie.main));
  }
};
