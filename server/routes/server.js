import path from 'path'
import express from 'express'
// @global
import { GLOBAL, PATH } from '../constants/index.js'
// @middleware
import { serverResponse } from '../middleware/index.js'

/**
 *
 * @param {func} app - express initialize
 */
const serverRoute = (app) => {
  const PROD_ENV = 'production'

  if (GLOBAL.env === PROD_ENV) {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, PATH.buildLoc)))
    app.get('*', (req, res) => res.sendFile(PATH.buildView))
  } else {
    app.get(PATH.home, serverResponse)
  }
}

export default serverRoute
