import jwt from 'jsonwebtoken'
import asyncHandler from './async-handler'
import { User } from '../models/index.js'
// global
import { GLOBAL } from '../constants/index.js'
// constants
import { RESPONSES } from '../constants/index.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  token = req.cookies.cookie

  if (token) {
    try {
      const decoded = jwt.verify(token, GLOBAL.jwt_secret)
      req.user = await User.findById(decoded.userId).select('-password')
    } catch (error) {
      res.status(401)
      throw new Error(RESPONSES.err.invalidToken)
    }
  } else {
    res.status(401)
    throw new Error(RESPONSES.err.noToken)
  }
})

export { protect }
