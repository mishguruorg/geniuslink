/* @flow */

import test from 'ava'
import nock from 'nock'

import { AddLinkToGroupFailed } from '../errors'

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

test('If genius replies with 200 but LinkResponses contains an error message, throw an error that we can easily see', async (t) => {
  const LINK = 'http://app.mish.guru'
  const GROUP_ID = 99870

  nock('https://api.geni.us')
    .post('/v1/links/add')
    .reply(200, {
      LinkResponses: [{
        ErrorMessage: 'genius message'
      }]
    })

  const error = await t.throwsAsync(addLinkToGroup(LINK, GROUP_ID))
  t.truthy(error instanceof AddLinkToGroupFailed)
})
