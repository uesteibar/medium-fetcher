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
      avatar: `https://cdn-images-1.medium.com/fit/c/200/200/${user.imageId}`,
    }
  };
}

export default UserParser
