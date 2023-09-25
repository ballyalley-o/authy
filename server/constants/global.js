const GLOBAL = {
  apiBase: process.env.API_ROOT,
  serverUrl: (PORT) => process.env.SERVER + PORT,
  port: process.env.PORT,
  env: process.env.ENV,
}

export default GLOBAL
