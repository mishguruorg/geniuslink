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
  const defaultValue = 0
  const path = [0, 'Value', 'Clicks']
  return pathOr(defaultValue, path, res.body.ClicksByDate)
}

export default getTotalLinkClicks
