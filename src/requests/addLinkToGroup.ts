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
  const baseCode = R.path(['body', 'shortUrl', 'baseCode'], res)

  if (code == null || baseCode == null) {
    throw new AddLinkToGroupFailed('Either code and/or baseCode was not available!')
  }

  return {
    id: baseCode,
    shortcode: code
  }
}

export default addLinkToGroup
