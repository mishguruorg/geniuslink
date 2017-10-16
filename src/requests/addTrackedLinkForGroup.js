/* @flow */

import { makePostRequest } from '../request'

const path = '/v1/links/add'

const addTrackedLinkForGroup = async (url: string, TSID: string) => {
  const res = await makePostRequest(path, {
    url,
    TSID,
    domain: 'mish.gr',
    linkCreatorSetting: 'Simple'
  })
  const [ linkResponse ] = res.body.LinkResponses
  return linkResponse.NewLink
}

export default addTrackedLinkForGroup
