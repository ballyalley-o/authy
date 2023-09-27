import { GLOBAL } from '../constants/index.js'

const RESPONSES = {
  server: {
    name: 'Authy SERVER',
    status: 'Running',
    API: 'authy-server',
    url: GLOBAL.serverBase(GLOBAL.port) + GLOBAL.apiBase,
    port: GLOBAL.port,
    environment: GLOBAL.env,
  },
  auth: {
    message: 'Auth User',
  },
  err: {
    404: 'RESOURCE NOT FOUND',
  },
}

export default RESPONSES
