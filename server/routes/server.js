import path from 'path'
import express from 'express'
import { GLOBAL } from '../constants/index.js'
import { serverResponse } from '../middleware/index.js'

const serverRoute = (app) => {
  if (GLOBAL.env === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, 'client/dist')))
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    )
  } else {
    app.get('/', serverResponse)
  }
}

export default serverRoute
