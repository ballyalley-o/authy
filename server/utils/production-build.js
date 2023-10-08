import path from 'path'
import { GLOBAL } from '../constants/index.js'
// @app
import express from 'express'

const prodBuild = (app) => {
  if (GLOBAL.env === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, 'client/dist')))
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    )
  } else {
  }
}
