// @flow

import fetch, { retriers } from 'json-fetch'
import qs from 'query-string'

const ROOT = 'https://api.geni.us'

const HEADERS = {
  'Accept': 'application/json',
  'X-Api-Key': undefined,
  'X-Api-Secret': undefined
}

const setApiKeys = (key: string, secret: string) => {
  HEADERS['X-Api-Key'] = key
  HEADERS['X-Api-Secret'] = secret
}

const makeRequest = (path: string, options: Object = {}) => {
  const url = ROOT + path
  return fetch(url, {
    expectedStatuses: [200],
    shouldRetry: retriers.isNetworkError,
    retry: {
      retries: 5
    },

    headers: HEADERS,

    ...options
  })
}

const makeGetRequest = (path: string, params: ?Object) => {
  let queryString = ''
  if (params != null) {
    queryString = '?' + qs.stringify(params)
  }
  return makeRequest(path + queryString)
}

const makePostRequest = (path: string, body: ?Object) => {
  return makeRequest(path, {
    method: 'POST',
    body: body
  })
}

export {
  setApiKeys,
  makeGetRequest,
  makePostRequest
}
