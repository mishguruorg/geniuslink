/* @flow */

import test from 'ava'
import nock from 'nock'

import addLinkToGroup from './addLinkToGroup'

test(`create a new tracked link`, async (t) => {
  const LINK = 'http://app.mish.guru'
  const SHORTCODE = 'a823e1'
  const GROUP_ID = 12345

  nock('https://api.geni.us')
    .post('/v1/links/add')
    .reply(200, {
      LinkResponses: [{
        NewLink: {
          ShortUrlCode: SHORTCODE
        }
      }]
    })

  const shortcode = await addLinkToGroup(LINK, GROUP_ID)

  t.is(shortcode, SHORTCODE)
})
