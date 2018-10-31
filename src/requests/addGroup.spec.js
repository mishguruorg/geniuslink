/* @flow */

import test from 'ava'
import nock from 'nock'
import { GroupNameCharLimitExceeded } from '../errors'

import addGroup from './addGroup'

test(`create a new tracked link`, async (t) => {
  const GROUP_NAME = 'billybob'
  const NEW_GROUP_ID = 33128

  nock('https://api.geni.us')
    .get('/v1/groups/add')
    .query({
      GroupName: GROUP_NAME
    })
    .reply(200, {
      IsError: {
        ErrorMessage: '',
        ErrorTitle: ''
      },
      NewGroupId: NEW_GROUP_ID,
      Now: '/Date(1508127068164)/',
      Request: {
        GroupName: GROUP_NAME,
        Notes: '',
        Id: 0
      }
    })

  const newGroupId = await addGroup(GROUP_NAME)

  t.is(newGroupId, NEW_GROUP_ID)
})

test(`GroupNameCharLimitExceeded is thrown when the group name is too long`, async (t) => {
  const GROUP_NAME = 'hereisareallyreallylonggroupname'

  const error = await t.throwsAsync(addGroup(GROUP_NAME))

  t.truthy(error instanceof GroupNameCharLimitExceeded)
})
