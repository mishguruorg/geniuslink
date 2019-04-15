import test from 'ava'
import nock from 'nock'

import { AddLinkToGroupFailed } from '../errors'

import addLinkToGroup from './addLinkToGroup'

test('create a new tracked link', async (t) => {
  const LINK = 'http://app.mish.guru'
  const SHORTCODE = 'a823e1'
  const GROUP_ID = 12345

  nock('https://api.geni.us')
    .post('/v3/shorturls')
    .reply(200, {
      shortUrl: {
        code: SHORTCODE,
      },
    })

  const shortcode = await addLinkToGroup(LINK, GROUP_ID)

  t.is(shortcode, SHORTCODE)
})

test('throw error if code is not returned', async (t) => {
  const LINK = 'http://app.mish.guru'
  const GROUP_ID = 12345

  nock('https://api.geni.us')
    .post('/v3/shorturls')
    .reply(200, {
      shortUrl: {
        code: null,
      },
    })

  await t.throwsAsync(addLinkToGroup(LINK, GROUP_ID), AddLinkToGroupFailed)
})
