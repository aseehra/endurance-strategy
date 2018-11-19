import { combineReducers } from 'redux';

import races, { selectors as racesSelectors } from './races';

export default combineReducers({
  races,
});

export const getRaces = state => racesSelectors.getRaces(state.races);
