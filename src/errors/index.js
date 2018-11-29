// eslint-disable-next-line import/prefer-default-export
export class FetchError extends Error {
  constructor(res, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }

    this.message = res.statusText;
    this.code = res.status;
  }
}

export class ApiError extends Error {
  constructor(error, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.message = error.message;
    this.code = error.status;
  }
}
