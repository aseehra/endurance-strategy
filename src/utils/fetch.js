import { ApiError, FetchError } from '../errors';

// eslint-disable-next-line import/prefer-default-export
export function normalizeErrors(res) {
  if (!res.ok) {
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.startsWith('application/json')) {
      return res.json().then(data => Promise.reject(new ApiError(data)));
    }
    return Promise.reject(new FetchError(res));
  }

  return res;
}
