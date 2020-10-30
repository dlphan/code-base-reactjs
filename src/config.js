// eslint-disable-next-line no-undef
const env = process.env.ENV || 'development'

const GRAPHQL_API = {
  development: {
    ENDPOINT: 'https://chirashi-kun.mirai-chi.com:3001/graphql'
  },
  staging: {
    ENDPOINT: 'https://chirashi-kun.mirai-chi.com:4001/graphql'
  },
  production: {
    ENDPOINT: 'https://chirashi-kun.mirai-chi.com:5001/graphql'
  }
}

export default GRAPHQL_API[env]
