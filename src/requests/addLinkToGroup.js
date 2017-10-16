/* @flow */

import { makePostRequest } from '../request'

const PATH = '/v1/links/add'

const addLinkToGroup = async (url: string, TSID: string | number) => {
  const res = await makePostRequest(PATH, {
    url,
    TSID,
    domain: 'mish.gr',
    linkCreatorSetting: 'Simple'
  })
  const [ linkResponse ] = res.body.LinkResponses
  return linkResponse.NewLink.ShortUrlCode
}

export default addLinkToGroup
