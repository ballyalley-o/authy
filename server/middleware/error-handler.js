import { RESPONSES, GLOBAL } from '../constants/index.js'

/**
 * handles notfound for the server
 * @param {object} req - request
 * @param {any} res - response
 * @param {func} next - callback
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

/**
 *  handle error boundary for the server
 * @param {string} err - error
 * @param {object} req - request
 * @param {any} res - response
 * @param {func} next - callback
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message
  const PROD_ENV = 'production'

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404
    message = RESPONSES.err[404]
  }
  res.status(statusCode).json({
    message,
    stack: GLOBAL.env === PROD_ENV ? null : err.stack,
  })
}

export { notFound, errorHandler }
