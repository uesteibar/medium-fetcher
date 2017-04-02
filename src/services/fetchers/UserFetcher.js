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
      .then(response => JSON.parse(response.body.slice(16)).payload)
      .then(payload => {
        const parser = new UserParser(payload, this.options)
        return parser.parse()
      })
  };
}

export default UserFetcher
