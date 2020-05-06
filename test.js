import test from 'ava'
import request from 'supertest'
import proxy from './main'
import Koa from 'koa'

test('proxy with options', async t => {
  const app = new Koa()
  proxy({
    '/v3/*': ['polyfill.io', { https: true }]
  })({ app })
  const res = await request(app.callback())
    .get('/v3/polyfill.min.js')
    .expect(200)
  t.true(res.text.includes('Disable minification'))
})
