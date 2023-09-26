import serverResponse from '../middleware/server-response.js'

const serverRoute = (app) => {
  app.get('/', serverResponse)
}

export default serverRoute
