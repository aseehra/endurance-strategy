import { combineReducers } from 'redux';

import races, { selectors as racesSelectors } from './races';
import statistics, { selectors as statisticsSelectors } from './statistics';

export default combineReducers({
  races,
  statistics,
});

export const getRaces = state => racesSelectors.getRaces(state.races);
export const getRace = state => racesSelectors.getRace(state.races);
export const getRaceEntries = state => racesSelectors.getRaceEntries(state.races);
export const getRaceEntry = state => racesSelectors.getRaceEntry(state.races);
export const getRacesLoading = state => racesSelectors.getRacesLoading(state.races);
export const getEntriesLoading = state => racesSelectors.getEntriesLoading(state.races);
export const getRaceEntriesFilter = state => racesSelectors.getFilter(state.races);

export const getLoading = state => statisticsSelectors.getLoading(state.statistics);
export const getStatistics = state => statisticsSelectors.getStatistics(state.statistics);
