// @flow

import test from 'ava'
import nock from 'nock'

import getTotalLinkClicks from './getTotalLinkClicks'

test('get total link clicks returns a value when there are clicks', async (t) => {
  const SHORTCODE = 'abcdef'
  const CLICKS = 123

  nock('https://api.geni.us')
    .get('/v1/reports/link-click-trend-by-resolution')
    .query({
      shortcode: SHORTCODE,
      advertiserid: '0',
      resolution: 'lifetime'
    })
    .reply(200, {
      ClicksByDate: [{
        Value: {
          Clicks: CLICKS
        }
      }]
    })

  const totalClicks = await getTotalLinkClicks(SHORTCODE)

  t.is(totalClicks, CLICKS)
})

test('get total link clicks returns 0 when there are no clicks', async (t) => {
  const SHORTCODE = '5z0vlcd'

  nock('https://api.geni.us')
    .get('/v1/reports/link-click-trend-by-resolution')
    .query({
      shortcode: SHORTCODE,
      advertiserid: '0',
      resolution: 'lifetime'
    })
    .reply(200, {
      ClicksByDate: []
    })

  const totalClicks = await getTotalLinkClicks(SHORTCODE)
  t.is(totalClicks, 0)
})
