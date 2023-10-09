import App from './config/server-config.js'

const app = new App()

/**
 * App & Database initializer
 */
app.connectDB()
app.start()
