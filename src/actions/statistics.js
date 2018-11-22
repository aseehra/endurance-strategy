import { API_BASE_URL } from '../config';

import { normalizeErrors } from '../utils/fetch';
import {
  FETCH_ENTRY_STATISTICS,
  FETCH_ENTRY_STATISTICS_FAILURE,
  FETCH_ENTRY_STATISTICS_SUCCESS,
} from './types';

const fetchStatisticsStart = entryId => ({
  type: FETCH_ENTRY_STATISTICS,
  entryId,
});

const fetchStatisticsFailure = (entryId, error) => ({
  type: FETCH_ENTRY_STATISTICS_FAILURE,
  entryId,
  error,
});

const fetchStatisticsSuccess = data => ({
  type: FETCH_ENTRY_STATISTICS_SUCCESS,
  ...data,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchStatistics = entryId => (dispatch) => {
  dispatch(fetchStatisticsStart(entryId));

  fetch(`${API_BASE_URL}/api/statistics/entry/${entryId}`)
    .then(normalizeErrors)
    .then(res => res.json())
    .then(data => dispatch(fetchStatisticsSuccess(data)))
    .catch(error => dispatch(fetchStatisticsFailure(error)));
};
