import got from 'got'
import qs from 'query-string'

type Params = Record<string, string>

interface RequestOptions {
  method?: string,
  body?: object,
}

const ROOT = 'https://api.geni.us'

const HEADERS = {
  Accept: 'application/json',
  'X-Api-Key': undefined as string,
  'X-Api-Secret': undefined as string,
}

const setApiKeys = (key: string, secret: string) => {
  HEADERS['X-Api-Key'] = key
  HEADERS['X-Api-Secret'] = secret
}

const makeRequest = (path: string, options?: RequestOptions) => {
  const url = ROOT + path
  return got(url, {
    headers: HEADERS,
    json: true,
    ...options,
  })
}

const makeGetRequest = (path: string, params?: Params) => {
  let queryString = ''
  if (params != null) {
    queryString = '?' + qs.stringify(params)
  }
  return makeRequest(path + queryString)
}

const makePostRequest = (path: string, body: object) => {
  return makeRequest(path, {
    method: 'POST',
    body,
  })
}

export { setApiKeys, makeGetRequest, makePostRequest }
