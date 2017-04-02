class UserParser {
  constructor(payload, options) {
    this.user = payload.user
    this.posts = payload.references.Post
    this.options = options
  }

  userData = () => {
    return {
      id: this.user.userId,
      name: this.user.name,
      username: this.user.name,
      bio: this.user.bio,
      twitterHandle: this.user.twitterScreenName,
      avatar: `https://cdn-images-1.medium.com/fit/c/200/200/${this.user.imageId}`,
      latestPosts: this.latestPostsData(),
    }
  };

  latestPostsData = () => {
    return Object.keys(this.posts).map(key => {
      const post = this.posts[key]
      return {
        id: post.id,
        language: post.detectedLanguage,
        title: post.title,
        summary: post.content.subtitle,
      }
    })
  };

  parse = () => {
    let response = this.userData()

    return response
  };
}

export default UserParser
