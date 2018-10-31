// @flow

import { makePostRequest } from '../request'
import { AddLinkToGroupFailed } from '../errors'

const PATH = '/v1/links/add'

const addLinkToGroup = async (url: string, TSID: string | number) => {
  const res = await makePostRequest(PATH, {
    url,
    TSID,
    domain: 'mish.gr',
    linkCreatorSetting: 'Simple'
  })
  const [ linkResponse ] = res.body.LinkResponses

  if (linkResponse.ErrorMessage && linkResponse.ErrorMessage !== '') {
    throw new AddLinkToGroupFailed()
  }

  return linkResponse.NewLink.ShortUrlCode
}

export default addLinkToGroup
