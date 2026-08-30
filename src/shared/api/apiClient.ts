import type { TRequestOptions } from './types';

async function request<T>(url: string, options: TRequestOptions = {}): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${url}`);
  }

  return response.json() as Promise<T>;
}

const withJsonBody = (
  method: 'POST' | 'PUT',
  data: unknown,
  options: TRequestOptions,
): TRequestOptions => {
  const { headers, ...restOptions } = options;

  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: data ? JSON.stringify(data) : null,
    ...restOptions,
  };
};

export const apiClient = {
  get: <T>(url: string, options?: TRequestOptions) => request<T>(url, options),

  post: <T>(url: string, data: unknown = null, options: TRequestOptions = {}) =>
    request<T>(url, withJsonBody('POST', data, options)),

  put: <T>(url: string, data: unknown = null, options: TRequestOptions = {}) =>
    request<T>(url, withJsonBody('PUT', data, options)),

  delete: <T>(url: string) => request<T>(url, { method: 'DELETE' }),
};
