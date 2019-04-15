import ExtendableError from 'es6-error'

class GroupNameCharLimitExceeded extends ExtendableError {
  public constructor () {
    super(
      'GeniusLink group name is longer than the max character limit of 20 characters',
    )
  }
}

class AddLinkToGroupFailed extends ExtendableError {
  public constructor (message: string) {
    super(`Failed to generate a shortcode using Genius API: ${message}`)
  }
}

export { GroupNameCharLimitExceeded, AddLinkToGroupFailed }
