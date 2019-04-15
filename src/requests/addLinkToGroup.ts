import { makePostRequest } from '../request'
import { AddLinkToGroupFailed } from '../errors'

const PATH = '/v3/shorturls'

const addLinkToGroup = async (url: string, groupId: string | number) => {
  const res = await makePostRequest(PATH, {
    url,
    groupId,
    domain: 'mish.gr',
    linkCreatorSetting: 'Simple',
  })
  return res.body.shortUrl.code
}

export default addLinkToGroup
