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

  if (linkResponse.ErrorMessage && linkResponse.ErrorMessage !== '') {
    const error = new Error('Genius API could not generate a code, but still came back with 200')
    error.originalMessage = linkResponse.ErrorMessage
    throw error
  }

  return linkResponse.NewLink.ShortUrlCode
}

export default addLinkToGroup
