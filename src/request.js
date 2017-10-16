/* @flow */
import fetch, { retriers } from 'json-fetch'
import qs from 'query-string'

const ROOT = 'https://api.geni.us'

const HEADERS = {
  'Accept': 'application/json',
  'X-Api-Key': 'f0113005efae447c8f637b3122f100bb',
  'X-Api-Secret': '96675fc1a8f3420e84da9d09d64b6fa6'
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
