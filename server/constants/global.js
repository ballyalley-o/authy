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
  // mongodb
  uri: process.env.DB_URI,
  scheme: process.env.DB_SCHEME,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  pass: process.env.DB_PW,
  dbname: process.env.DB_DBNAME,
}

export default GLOBAL
