import { combineReducers } from 'redux';

import races, { selectors as racesSelectors } from './races';

export default combineReducers({
  races,
});

export const getRaces = state => racesSelectors.getRaces(state.races);
export const getRaceEntries = state => racesSelectors.getRaceEntries(state.races);
export const getRacesLoading = state => racesSelectors.getRacesLoading(state.races);
export const getEntriesLoading = state => racesSelectors.getEntriesLoading(state.races);
