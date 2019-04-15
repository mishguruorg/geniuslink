import { makeGetRequest } from '../request'

const path = '/v1/group/get-details'

const getGroupDetailsByName = async (groupName: string) => {
  const params = { group: groupName }
  const res = await makeGetRequest(path, params)
  return res.body.Group
}

const getGroupDetailsById = async (groupId: string) => {
  const params = { groupId }
  const res = await makeGetRequest(path, params)
  return res.body.Group
}

export { getGroupDetailsByName, getGroupDetailsById }
