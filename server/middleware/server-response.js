import logger from './logger.js'
import { RESPONSES } from '../constants/index.js'

const serverLogger = (PORT, isConnected) => {
  logger.server(PORT, isConnected)
}

const serverResponse = (req, res) => {
  res.send(RESPONSES.server)
}

export default serverResponse
