const { createProxyMiddleware } = require('http-proxy-middleware')
const { env } = require('process')
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import { env } from 'process'

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(';')[0]
  : 'http://localhost:47886'

const context = ['/api']

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive',
    },
  })

  app.use(appProxy)
}
