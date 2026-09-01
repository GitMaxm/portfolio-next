/** Ошибка неуспешного ответа. Статус нужен, чтобы отличить 404 от остальных сбоев. */
export class ApiError extends Error {
  readonly status: number;
  readonly url: string;

  constructor(status: number, url: string) {
    super(`HTTP error ${status}: ${url}`);

    this.name = 'ApiError';
    this.status = status;
    this.url = url;
  }
}
