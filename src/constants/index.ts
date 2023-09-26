export const env = {
  ENV: process.env.ENV ? process.env.ENV : 'localhost:3000',
}
const ENVIRONMENT = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
const BASE_URL = ENVIRONMENT === 'development' ? 'http://localhost:3000' : URL

export const IMAGE_URL = `/images/`