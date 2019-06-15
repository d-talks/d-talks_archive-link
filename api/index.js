import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

// require('dotenv').config()

const app = express()

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 50000,
    extended: true
  })
)

app.use(
  bodyParser.json({
    limit: '50mb'
  })
)

app.use(router)

export default {
  path: '/api',
  handler: app
}
