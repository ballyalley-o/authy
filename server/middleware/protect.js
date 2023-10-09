import jwt from 'jsonwebtoken'
import asyncHandler from './async-handler.js'
import { User } from '../models/index.js'
// @global
import { GLOBAL } from '../constants/index.js'
// @constants
import { RESPONSES } from '../constants/index.js'

/**
 * protect the route from public access
 */
const protect = asyncHandler(async (req, res, next) => {
  let token

  token = req.cookies.cookie

  if (token) {
    try {
      const decoded = jwt.verify(token, GLOBAL.jwt_secret)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error(RESPONSES.err.invalidToken)
    }
  } else {
    res.status(401)
    throw new Error(RESPONSES.err.noToken)
  }
})

export default protect
