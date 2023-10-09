import jwt from 'jsonwebtoken'
// global
import { GLOBAL } from '../constants/index.js'
import { thirtyDays } from '../constants/index.js'

const ENV = 'development'

/**
 * @param {*} res - response
 * @param {*} userId - send user id for token
 */
const genToken = (res, userId) => {
  const token = jwt.sign({ userId }, GLOBAL.jwt_secret, {
    expiresIn: GLOBAL.jwt_exp,
  })
  res.cookie(GLOBAL.cookie, token, {
    httpOnly: true,
    secure: GLOBAL.env !== ENV,
    sameSite: 'strict',
    maxAge: thirtyDays,
  })
}

export default genToken
