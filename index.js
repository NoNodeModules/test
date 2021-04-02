const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const proxy = require('koa-server-http-proxy')

const port = 3000

const app = new Koa()

app.use(static(path.join(__dirname, './dist')))

// 代理http://localhost:3000/common/adver-getadver
app.use(proxy('/api', {
  target: 'http://test.yunjingtai2.com/',
  changeOrigin: true,
  pathRewrite: { '^/api': ''}
}))

app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
  console.log(`http://localhost:3000`)
})