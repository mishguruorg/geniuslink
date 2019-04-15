import { setApiKeys } from './request'

type Options = {
  key: string
  secret: string
}

const initGeniusLink = (options: Options) => {
  setApiKeys(options.key, options.secret)
}

export default initGeniusLink
