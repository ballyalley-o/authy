import logger from './logger.js'
import { RESPONSES } from '../constants/index.js'

const serverLogger = (PORT, isConnected) => {
  logger.server(PORT, isConnected)
}

/**
 * response from server
 * @param {*} req - request param
 * @param {*} res - response param
 */
const serverResponse = (req, res) => {
  res.send(RESPONSES.server)
}

export default serverResponse
