/* @flow */

import { makeGetRequest } from '../request'

const PATH = '/v1/reports/link-click-trend-by-resolution'

const getTotalLinkClicks = async (shortcode: string) => {
  const res = await makeGetRequest(PATH, {
    shortcode,
    advertiserid: '0',
    resolution: 'lifetime'
  })
  return res.body.ClicksByDate[0].Value.Clicks
}

export default getTotalLinkClicks
