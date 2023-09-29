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
  db_uri: process.env.DB_URI,
  db_scheme: process.env.DB_SCHEME,
  db_host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  db_pass: process.env.DB_PW,
  db_name: process.env.DB_DBNAME,
}

export default GLOBAL
