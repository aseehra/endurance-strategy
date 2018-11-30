import { normalizeErrors } from './fetch';

import { ApiError, FetchError } from '../errors';

describe('normalizeErrors', () => {
  it('should return res if ok', () => {
    const res = { ok: true };
    expect(normalizeErrors(res)).toBe(res);
  });

  it('should return an ApiError if response is json', () => {
    const res = {
      ok: false,
      headers: { get: jest.fn(() => 'application/json') },
      json: jest.fn(() => Promise.resolve({
        message: 'foo bar',
        status: 404,
      })),
    };

    return expect(normalizeErrors(res)).rejects.toThrowError(ApiError);
  });

  it("should return a FetchError if response isn't json", () => {
    const res = {
      ok: false,
      headers: { get: jest.fn(() => 'foo') },
      statusText: 'testStatus',
      status: 500,
    };

    return expect(normalizeErrors(res)).rejects.toThrowError(FetchError);
  });
});
