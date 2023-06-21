import express from 'express'
import { logWarn } from '../logs/logger.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi from express server!' })
})

//* 404
router.get('/*', (req, res) => {
  logWarn.warn(`The route doesn't exist`)
  res.status(404).sendFile('404error.html', { root: 'src/routes/error-pages' })
})

export { router as apiRouter }
