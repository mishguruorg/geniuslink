// @flow

import test from 'ava'
import nock from 'nock'

import { getGroupDetailsById, getGroupDetailsByName } from './getGroupDetails'

test(`getGroupDetailsByName should find the details for a group based on the group name`, async (t) => {
  const GROUP_ID = '32744'
  const GROUP = 'default'

  nock('https://api.geni.us')
    .get('/v1/group/get-details')
    .query({
      group: GROUP
    })
    .reply(200, {
      Group: {
        Name: GROUP,
        Id: GROUP_ID
      }
    })

  const groupDetails = await getGroupDetailsByName(GROUP)

  t.is(groupDetails.Name, GROUP)
  t.is(groupDetails.Id, GROUP_ID)
})

test(`getGroupDetailsById should find the details for a group based on the group id`, async (t) => {
  const GROUP_ID = '32744'
  const GROUP = 'default'

  nock('https://api.geni.us')
    .get('/v1/group/get-details')
    .query({
      groupId: GROUP_ID
    })
    .reply(200, {
      Group: {
        Name: GROUP,
        Id: GROUP_ID
      }
    })

  const groupDetails = await getGroupDetailsById(GROUP_ID)

  t.is(groupDetails.Name, GROUP)
  t.is(groupDetails.Id, GROUP_ID)
})
