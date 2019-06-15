import express from 'express'
import main from './main'

const router = express.Router()

router.use((req, res, next) => {
  next()
})

router.use(main)

router.use((err, req, res, next) => {
  if (err.response) {
    const { status, data } = err.response

    if (status === 401) {
      req.session = null
      res.clearCookie('connect.sid')
    }

    res.status(status).json(data)
  } else {
    res.status(500).json(err.toString())
  }
})

export default router
