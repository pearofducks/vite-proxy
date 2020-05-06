const proxy = require('koa-better-http-proxy')
const router = require('koa-route')

const proxyPlugin = proxies => ({ app }) => Object.entries(proxies).forEach(([src, dest]) => {
  app.use(router.all(src, proxy(...(Array.isArray(dest) ? dest : [dest]))))
})

module.exports = proxyPlugin
