/* @flow */

import { makeGetRequest } from '../request'

const path = '/v1/reports/link-click-trend-by-resolution'

const totalLinkClicks = async (shortcode: string) => {
  const res = await makeGetRequest(path, {
    shortcode,
    advertiserid: '0',
    resolution: 'lifetime'
  })
  return res.body.ClicksByDate[0].Value.Clicks
}
