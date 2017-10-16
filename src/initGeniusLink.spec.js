/* @flow */

import test from 'ava'
import nock from 'nock'

import initGeniusLink from './initGeniusLink'
import { makeGetRequest } from './request'

test('should set API keys', async (t) => {
  const KEY = 'key'
  const SECRET = 'secret'

  nock('https://api.geni.us', {
    reqheaders: {
      'X-Api-Key': KEY,
      'X-Api-Secret': SECRET
    }
  })
    .get('/test')
    .reply(200)

  initGeniusLink({
    key: KEY,
    secret: SECRET
  })

  await makeGetRequest('/test')

  t.pass()
})
