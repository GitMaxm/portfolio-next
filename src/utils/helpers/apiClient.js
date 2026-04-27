async function request(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${url}`);
  }
  return response.json();
}

export const apiClient = {
  get: (url, options) => request(url, options),
  post: (url, data = null, options = {}) => {
    const { headers, ...restOptions } = options;
    return request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
      ...restOptions,
    });
  },
  put: (url, data = null, options = {}) => {
    const { headers, ...restOptions } = options;
    return request(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
      ...restOptions,
    });
  },
  delete: (url) => request(url, {
    method: 'DELETE'
  })
};