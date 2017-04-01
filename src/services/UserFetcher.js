import got from 'got'

class UserFetcher {
  constructor(username) {
    this.username = username
  }

  fetch = () => {
    return got(`medium.com/@${this.username}?format=json`)
      .then(response => JSON.parse(response.body.slice(16)))
      .then(response => response.payload.user)
      .then(user => {
        return {
          id: user.userId,
          name: user.name,
          username: user.name,
          bio: user.bio,
          twitterHandle: user.twitterScreenName,
        }
      })
  };
}

export default UserFetcher
