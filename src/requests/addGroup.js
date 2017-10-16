/* @flow */

import { makeGetRequest } from '../request'

const PATH = '/v1/groups/add'

const addGroup = async (name: string) => {
  const res = await makeGetRequest(PATH, {
    GroupName: name
  })
  return res.body.NewGroupId
}

export default addGroup
