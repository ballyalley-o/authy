import { GLOBAL } from '../constants/index.js'

const RESPONSES = {
  // server
  server: {
    name: 'Authy SERVER',
    status: 'Running',
    API: 'authy-server',
    url: GLOBAL.serverBase(GLOBAL.port) + GLOBAL.apiBase,
    port: GLOBAL.port,
    environment: GLOBAL.env,
  },
  // auth
  auth: (user, token) => {
    return {
      message: 'LOGIN SUCCESSFUL',
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
    }
  },
  //  register
  register: (user) => {
    return {
      message: 'CREATE USER SUCCESSFUL',
      _id: user._id,
      name: user.name,
      email: user.email,
    }
  },
  // logout
  signout: {
    message: 'SIGN OUT SUCCESSFUL',
  },
  //  profile
  profile: (user) => {
    return {
      message: 'WELCOME TO YOUR PROFILE',
      _id: user._id,
      name: user.name,
      email: user.email,
    }
  },
  //  update profile
  update: (user) => {
    return {
      message: 'UPDATED USER INFO',
      _id: user._id,
      name: user.name,
      email: user.email,
    }
  },
  //  errors
  err: {
    400: (i) => {
      return `${i} ALREADY EXISTS`
    },
    401: 'AN ERROR HAS OCCURED',
    404: (i) => {
      return `${i} NOT FOUND`
    },
    invalid: 'INVALID USER DATA',
    invalidCredentials: 'INVALID CREDENTIALS',
    noToken: 'NOT AUTHORIZED, NO TOKEN PROVIDED',
    invalidToken: 'NOT AUTHORIZED, INVALID TOKEN',
  },
}

export default RESPONSES
