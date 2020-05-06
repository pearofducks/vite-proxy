const { createServer } = require('vite')
const { getIPv4AddressList } = require('vite/dist/utils')
const proxy = require('../index')

createServer({
  plugins: [
    proxy({
      '/api*': 'https://swapi.dev/api/'
    })
  ]
}).listen(3000, () => {
  console.log("Listening on:")
  getIPv4AddressList().forEach(ip => console.log(ip + ':3000'))
})
