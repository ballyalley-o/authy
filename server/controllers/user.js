import { RESPONSES } from '../constants/index.js'

// @desc Auth user/set token
// @route POST /api/v1/users/auth
// @access Public
const authUser = (req, res) => {
  res.status(200).json(RESPONSES.auth)
}

export { authUser }
