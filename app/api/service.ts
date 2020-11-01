import qs from 'query-string';
import { API_URL } from '../constants';

const defaultHeaders: {
  'Content-Type': string;
  Authorization?: string;
} = {
  'Content-Type': 'application/json',
};

export function setAuthenticationHeader(token: string): void {
  defaultHeaders.Authorization = `Bearer ${token}`;
}

export function removeAuthenticationHeader(): void {
  delete defaultHeaders.Authorization;
}

interface IAPIArgs {
  url: string;
  method: 'GET' | 'POST';
  body?: any;
  headers?: any;
  params?: any;
  bodyParsing?: boolean;
  parseError?: boolean;
  [key: string]: any;
}

async function service(args: IAPIArgs): Promise<any> {
  const {
    url,
    method = 'GET',
    body = {},
    headers = {},
    params = null,
    parseError = false,
    ...extraProps
  } = args;

  const props = {
    method,
    headers: { ...defaultHeaders, ...headers },
    body: method !== 'GET' ? JSON.stringify(body) : null,
    ...extraProps,
  };

  let fetchUrl = `${API_URL}${url}`;
  if (params) {
    fetchUrl = `${fetchUrl}?${qs.stringify(params, {
      arrayFormat: 'bracket',
    })}`;
  }

  const data = await fetch(fetchUrl, props);
  if (data.status >= 400) {
    if (parseError) {
      const error = await data.json();
      throw error;
    }
    throw data;
  }
  return data.json();
}

export default service;
