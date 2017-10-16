/* @flow */

import { makeGetRequest } from '../request'

const path = '/v1/group/get-details'

const getGroupDetails = async (params: { group?: string, groupId?: number }) => {
  const res = await makeGetRequest(path, params)
  return res.body.Group
}

export default getGroupDetails
