import UserFetcher from './services/fetchers/UserFetcher'

const fetchUser = options => {
  const service = new UserFetcher(options)
  return service.fetch()
}

const medium = { fetchUser }

export default medium
