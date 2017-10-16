/* @flow */
import fetch, { retriers } from 'json-fetch'
import qs from 'query-string'

const ROOT = 'https://api.geni.us'

const HEADERS = {
  'Accept': 'application/json',
  'X-Api-Key': '***REMOVED***',
  'X-Api-Secret': '***REMOVED***'
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
  const queryString = qs.stringify(params)
  return makeRequest(path + '?' + queryString)
}

export {
  makeGetRequest
}
