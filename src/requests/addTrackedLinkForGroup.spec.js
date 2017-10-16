/* @flow */

import test from 'ava'
import nock from 'nock'

import addTrackedLinkForGroup from './addTrackedLinkForGroup'

test(`addTrackedLinkForGroup creates a new tracked link`, async (t) => {
  const testLink = 'http://app.mish.guru'
  const defaultGroup = 32744

  nock('https://api.geni.us')
    .post('/v1/links/add')
    .reply(200, {
      LinkResponses: [{
        NewLink: {
          Domain: 'mish.gr',
          ProductUrl: testLink,
          Tsid: defaultGroup,
          TotalClicks: 0,
          IsArchived: 0,
          LinkCreatorSetting: 'Simple'
        }
      }]
    })

  const linkedUrl = await addTrackedLinkForGroup(testLink, defaultGroup.toString())

  t.is(linkedUrl.Domain, 'mish.gr')
  t.is(linkedUrl.ProductUrl, testLink)
  t.is(linkedUrl.Tsid, defaultGroup)
  t.is(linkedUrl.TotalClicks, 0)
  t.is(linkedUrl.IsArchived, 0)
  t.is(linkedUrl.LinkCreatorSetting, 'Simple')
})
