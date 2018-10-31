import ExtendableError from 'es6-error'

class GroupNameCharLimitExceeded extends ExtendableError {
  constructor () {
    super('GeniusLink group name is longer than the max character limit of 20 characters')
  }
}

class AddLinkToGroupFailed extends ExtendableError {
  constructor () {
    super('Genius API could not generate a code, but still came back with 200')
  }
}

export {
  GroupNameCharLimitExceeded,
  AddLinkToGroupFailed
}