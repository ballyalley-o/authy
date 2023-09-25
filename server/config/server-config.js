import express from 'express'
import dotenv from 'dotenv'
// constants
import { GLOBAL } from '../constants/index.js'
import { logger, serverResponse } from '../middleware/index.js'
// logger
dotenv.config({
  path: './server/config/.env',
})

class App {
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.registerRoutes()
  }

  registerRoutes() {}

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
