import express from 'express'
// constants
import { GLOBAL } from '../constants/index.js'
import { logger } from '../middleware/index.js'
// routes
import { serverRoute } from '../routes/index.js'
// logger

class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.registerRoutes()
  }

  registerRoutes() {
    serverRoute(this.app)
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
