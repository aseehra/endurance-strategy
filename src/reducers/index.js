import { combineReducers } from 'redux';

import races, { selectors as racesSelectors } from './races';
import entries, { selectors as entriesSelectors } from './entries';
import statistics, { selectors as statisticsSelectors } from './statistics';
import ux, { selectors as uxSelectors } from './ux';

export default combineReducers({
  races,
  entries,
  statistics,
  ux,
});

export const getRaces = state => racesSelectors.getRaces(state.races);
export const getRace = state => racesSelectors.getRace(state.races);
export const getRacesLoading = state => racesSelectors.getRacesLoading(state.races);
export const getRaceEntries = state => entriesSelectors.getEntries(state.entries);
export const getRaceEntry = state => entriesSelectors.getEntry(state.entries);
export const getEntriesLoading = state => entriesSelectors.getLoading(state.entries);
export const getRaceEntriesFilter = state => entriesSelectors.getFilter(state.entries);

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

export const getIsMobile = state => uxSelectors.getIsMobile(state.ux);
