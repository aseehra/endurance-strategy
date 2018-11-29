import { combineReducers } from 'redux';

import races, { selectors as racesSelectors } from './races';
import statistics, { selectors as statisticsSelectors } from './statistics';
import ux, { selectors as uxSelectors } from './ux';

export default combineReducers({
  races,
  statistics,
  ux,
});

export const getRaces = state => racesSelectors.getRaces(state.races);
export const getRace = state => racesSelectors.getRace(state.races);
export const getRaceEntries = state => racesSelectors.getRaceEntries(state.races);
export const getRaceEntry = state => racesSelectors.getRaceEntry(state.races);
export const getRacesLoading = state => racesSelectors.getRacesLoading(state.races);
export const getEntriesLoading = state => racesSelectors.getEntriesLoading(state.races);
export const getRaceEntriesFilter = state => racesSelectors.getFilter(state.races);

// prettier-ignore
export const getRaceEntriesError = state => racesSelectors.getRaceEntriesError(
  state.races,
);

// prettier-ignore
export const getStatisticsLoading = state => statisticsSelectors.getLoading(
  state.statistics,
);

// prettier-ignore
export const getStatisticsError = state => statisticsSelectors.getError(
  state.statistics,
);

// prettier-ignore
export const getStatistics = state => statisticsSelectors.getStatistics(
  state.statistics,
);
export const getStints = state => statisticsSelectors.getStints(state.statistics);

// prettier-ignore
export const getMainOnboardingSeen = state => uxSelectors.getMainOnboardingSeen(
  state.ux,
);

// prettier-ignore
export const getRaceOnboardingSeen = state => uxSelectors.getRaceOnboardingSeen(
  state.ux,
);
