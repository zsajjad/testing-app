import qs from 'query-string';
import { API_URL } from '../constants';;

export function setAuthenticationHeader(token: string) {
  defaultHeaders.Authorization = `Bearer ${token}`;
}

export function removeAuthenticationHeader() {
  // @ts-ignore
  delete defaultHeaders.Authorization;
}

const defaultHeaders = {
  'Content-Type': 'application/json',
};
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
