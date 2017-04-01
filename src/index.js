import UserFetcher from './services/UserFetcher'

const fetchUser = username => {
  const service = new UserFetcher(username)
  return service.fetch()
}

const medium = { fetchUser }

export { medium }
