import { RESPONSES } from '../constants/index.js'
// middleware
import { asyncHandler } from '../middleware/index.js'

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
  res.status(200).json(RESPONSES.register)
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
