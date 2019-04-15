import { makeGetRequest } from '../request'
import { GroupNameCharLimitExceeded } from '../errors'

const PATH = '/v1/groups/add'

const addGroup = async (name: string) => {
  if (name.length > 20) {
    throw new GroupNameCharLimitExceeded()
  }
  const res = await makeGetRequest(PATH, {
    GroupName: name,
  })
  return res.body.NewGroupId
}

export default addGroup
