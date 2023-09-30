import { RESPONSES } from '../constants/index.js'
// middleware
import { asyncHandler, logger } from '../middleware/index.js'
// model
import { User } from '../models/index.js'
// utils
import { genToken } from '../utils/index.js'

// @desc Auth user/set token
// @route POST /api/v1/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json(RESPONSES.auth)
})

// @desc Register user
// @route POST /api/v1/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    // logger.error('')
    throw new Error(RESPONSES.err[400]('USER'))
  }

  const user = await User.create({ name, email, password })

  if (user) {
    genToken(res, user._id)
    res.status(201).json(RESPONSES.register(user))
  } else {
    res.status(400)
    throw new Error(RESPONSES.err.invalid)
  }
})

// @desc Logout User
// @route POST /api/v1/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json(RESPONSES.logout)
})

// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json(RESPONSES.profile)
})

// @desc Update user profile
// @route POST /api/v1/users/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json(RESPONSES.update)
})

const userController = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateProfile,
}
export default userController
