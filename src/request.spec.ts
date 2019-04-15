import test from 'ava'
import nock from 'nock'

import { makeGetRequest } from './request'

test('500 errors', async (t) => {
  nock('https://api.geni.us')
    .get('/500')
    .reply(500, { error: true })

  await t.throwsAsync(makeGetRequest('/500'))
})
