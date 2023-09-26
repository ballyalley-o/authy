import dotenv from 'dotenv'
dotenv.config({
  path: './server/config/config.env',
})

const GLOBAL = {
  apiBase: process.env.API_ROOT,
  versionBase: process.env.VERSION_ROOT,
  serverBase: (PORT) => process.env.SERVER + PORT,
  port: process.env.PORT,
  env: process.env.ENV,
}

export default GLOBAL
