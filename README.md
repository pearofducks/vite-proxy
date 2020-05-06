# vite-plugin-proxy

A plugin for [Vite](https://github.com/vuejs/vite) that proxies requests to other services

## install

```
yarn add --dev vite-plugin-proxy
```

## use

See `demo/main.js` for a full example.

```
const proxy = require('vite-plugin-proxy')

createServe({
  plugins: [
    proxy({
      '/local/path': 'http://remote.server/path'
    })
  ]
})
```

## api

example: `proxy: { '/v3/*': 'https://polyfill.io/' }`<br>
example: `proxy: { '/v3/*': ['https://polyfill.io/', { https: true }] }`<br>

The default export takes an object where the key is the route to attach to locally, and the value is the destination to proxy to.

The destination can be either a string, or an array specifying the two arguments for [koa-better-http-proxy](https://github.com/nsimmons/koa-better-http-proxy#usage).
