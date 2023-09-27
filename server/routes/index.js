import userRouter from './user.js'
import serverRoute from './server.js'

/**
 * controls the traffic in the router, it links all modules
 * @param {*} app - express initialize
 * @param {string} API_PATH - base path
 */
const linkRoutes = (app, API_PATH) => {
  const rootPath = API_PATH

  app.use(`${rootPath}/users`, userRouter)
}

export { linkRoutes, serverRoute }
