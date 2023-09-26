import userRouter from './user.js'
import serverRoute from './server.js'

const linkRoutes = (app, API_PATH) => {
  const rootPath = API_PATH

  app.use(`${rootPath}/users`, userRouter)
}

export { linkRoutes, serverRoute }
