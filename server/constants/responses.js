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
  auth: (user, token) => {
    return {
      message: 'LOGIN SUCCESSFUL',
      token,
      _id: user._id,
      email: user.email,
    }
  },
  register: (user) => {
    return {
      message: 'CREATE USER SUCCESSFUL',
      _id: user._id,
      name: user.name,
      email: user.email,
    }
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
    400: (i) => {
      return `${i} ALREADY EXISTS`
    },
    401: 'AN ERROR HAS OCCURED',
    404: 'RESOURCE NOT FOUND',
    invalid: 'INVALID USER DATA',
    invalidCredentials: 'INVALID CREDENTIALS',
    noToken: 'NOT AUTHORIZED, NO TOKEN PROVIDED',
    invalidToken: 'NOT AUTHORIZED, INVALID TOKEN',
  },
}

export default RESPONSES
