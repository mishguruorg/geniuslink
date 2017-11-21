/* @flow */
import { pathOr } from 'ramda'

import { makeGetRequest } from '../request'

const PATH = '/v1/reports/link-click-trend-by-resolution'

const getTotalLinkClicks = async (shortcode: string) => {
  const res = await makeGetRequest(PATH, {
    shortcode,
    advertiserid: '0',
    resolution: 'lifetime'
  })
  return pathOr(0, [0, 'Value', 'Clicks'], res.body.ClicksByDate)
}

export default getTotalLinkClicks
