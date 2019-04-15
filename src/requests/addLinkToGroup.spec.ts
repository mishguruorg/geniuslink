import test from 'ava'
import nock from 'nock'

import { AddLinkToGroupFailed } from '../errors'

import addLinkToGroup from './addLinkToGroup'

test('create a new tracked link', async (t) => {
  const LINK = 'http://app.mish.guru'
  const GROUP_ID = 12345
  const SHORT_CODE = 'shortcode'
  const BASE_CODE = 'basecode'

  nock('https://api.geni.us')
    .post('/v3/shorturls')
    .reply(200, {
      shortUrl: {
        code: SHORT_CODE,
        baseCode: BASE_CODE,
      },
    })

  const result = await addLinkToGroup(LINK, GROUP_ID)

  t.deepEqual(result, {
    id: BASE_CODE,
    code: SHORT_CODE,
  })
})

test('throw error if code is not returned', async (t) => {
  const LINK = 'http://app.mish.guru'
  const GROUP_ID = 12345

  nock('https://api.geni.us')
    .post('/v3/shorturls')
    .reply(200, {
      shortUrl: {
        code: null,
        baseCode: null,
      },
    })

  await t.throwsAsync(addLinkToGroup(LINK, GROUP_ID), AddLinkToGroupFailed)
})
