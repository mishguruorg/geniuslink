import * as R from 'ramda'

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

  const code = R.path(['body', 'shortUrl', 'code'], res)

  if (code == null) {
    throw new AddLinkToGroupFailed()
  }

  return code
}

export default addLinkToGroup
