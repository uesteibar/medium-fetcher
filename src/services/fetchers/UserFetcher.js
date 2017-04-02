import got from 'got'
import UserParser from '../parsers/UserParser'

class UserFetcher {
  constructor(options) {
    this.options = options
  }

  url = () => {
    return `medium.com/@${this.options.username}?format=json`
  };

  fetch = () => {
    return got(this.url())
      .then(response => JSON.parse(response.body.slice(16)))
      .then(response => response.payload.user)
      .then(user => {
        const parser = new UserParser(this.options)
        return parser.parse(user)
        
      })
  };
}

export default UserFetcher
