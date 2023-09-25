import express from 'express'
import serverResponse from '../middleware'

const app = express()

const serverRoute = () => {
  app.get('/', serverResponse())
}

export default serverRoute
