import express from 'express'
// constants
import { GLOBAL } from '../constants/index.js'
import { logger } from '../middleware/index.js'
// routes
import { serverRoute, linkRoutes } from '../routes/index.js'
// middleware
import { errorHandler, notFound } from '../middleware/index.js'
import cookieParser from 'cookie-parser'
// db
import connectDB from './db.js'

/**
 * @param app - express app
 * @param registerRoutes - connects and sends the base route to the main traffic
 */
class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.registerRoutes()
    this.app.use(notFound)
    this.app.use(errorHandler)
  }

  async connectDB() {
    try {
      await connectDB(true)
    } catch (error) {
      logger.error(error.message)
    }
  }

  registerRoutes() {
    serverRoute(this.app)
    linkRoutes(this.app, GLOBAL.apiBase + GLOBAL.versionBase)
  }

  start() {
    try {
      this.app.listen(GLOBAL.port, logger.server(GLOBAL.port, true))
    } catch (error) {
      logger.error(error)
      logger.server(GLOBAL.port, false)
    }
  }
}

export default App
