import { defineEventHandler } from 'h3'
import auth from 'basic-auth'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler((event) => {
  const {
    pairs = { admin: 'admin' },
  } = useRuntimeConfig().basicAuth || {}

  const { name, pass } = auth(event.req) ?? {}
  if (!name || !pass || !pairs[name] || pairs[name] !== pass) {
    event.res.statusCode = 401
    event.res.setHeader('WWW-Authenticate', `Basic realm="Authentication Required"`)
    event.res.end('Unauthorized')
  }
})