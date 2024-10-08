const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors())
app.use(createProxyMiddleware({
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  headers: {
    'Authorization': 'Bearer XXXXX',
    //'Content-Type': 'application/x-www-form-urlencoded',
    'Connection': 'keep-alive'
  }
}))

app.listen(3000, () => {
  console.info('proxy server is running on port 3000')
})
