/* @flow */

import { makeGetRequest } from '../request'

const PATH = '/v1/reports/link-click-trend-by-resolution'

const getTotalLinkClicks = async (shortcode: string) => {
  const res = await makeGetRequest(PATH, {
    shortcode,
    advertiserid: '0',
    resolution: 'lifetime'
  })
  const clicksByDate = res.body.ClicksByDate
  let numberOfClicks
  if (clicksByDate.length === 0) {
    numberOfClicks = 0
  } else {
    numberOfClicks = res.body.ClicksByDate[0].Value.Clicks
  }
  return numberOfClicks
}

export default getTotalLinkClicks
