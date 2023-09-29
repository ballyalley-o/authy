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
  register: {
    message: 'Register User',
  },
  logout: {
    message: 'LOG OUT SUCCESSFUL',
  },
  profile: {
    message: 'USER PROFILE',
  },
  update: {
    message: 'UPDATE PROFILE',
  },
  err: {
    401: 'AN ERROR HAS OCCURED',
    404: 'RESOURCE NOT FOUND',
  },
}

export default RESPONSES
