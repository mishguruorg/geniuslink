import test from 'ava'
import addTrackedLinkForGroup from './addTrackedLinkForGroup'

test(`addTrackedLinkForGroup creates a new tracked link`, async (t) => {
  const testLink = 'http://app.mish.guru'
  const defaultGroup = '32744'
  const linkedUrl = await addTrackedLinkForGroup(testLink, defaultGroup)

  t.is(linkedUrl.Domain, 'mish.gr')
  t.is(linkedUrl.ProductUrl, testLink)
  t.is(linkedUrl.Tsid, parseInt(defaultGroup))
  t.is(linkedUrl.TotalClicks, 0)
  t.is(linkedUrl.IsArchived, 0)
  t.is(linkedUrl.LinkCreatorSetting, 'Simple')
})