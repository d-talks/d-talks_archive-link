import express from 'express'
const router = express.Router()
const parseUrl = require('../services/parse-url')

router.get('/parse', async (req, res, next) => {
  try {
    const url = req.query.url || null

    if (!url) {
      throw new Error('url is missing')
    }

    const result = url ? await parseUrl(url) : {}

    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
