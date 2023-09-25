import { GLOBAL } from '../constants/index.js'

const RESPONSES = {
  server: {
    name: 'Authy SERVER',
    status: 'Running',
    API: 'authy-server',
    url: GLOBAL.serverUrl(GLOBAL.port) + GLOBAL.apiBase,
    port: GLOBAL.port,
    environment: GLOBAL.env,
  },
}

export default RESPONSES
