import { setApiKeys } from './request'

interface Options {
  key: string,
  secret: string,
}

const initGeniusLink = (options: Options) => {
  setApiKeys(options.key, options.secret)
}

export default initGeniusLink
