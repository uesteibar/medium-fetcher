class UserParser {
  constructor(options) {
    this.options = options
  }

  parse = user => {
    return {
      id: user.userId,
      name: user.name,
      username: user.name,
      bio: user.bio,
      twitterHandle: user.twitterScreenName,
    }
  };
}

export default UserParser
