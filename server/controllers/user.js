import { RESPONSES } from '../constants/index.js'
// middleware
import { asyncHandler, logger } from '../middleware/index.js'
// model
import { User } from '../models/index.js'
// utils
import { genToken } from '../utils/index.js'
import { expire } from '../constants/index.js'
// constants
import { GLOBAL } from '../constants/index.js'

// @desc Auth user/set token
// @route POST /api/v1/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  const matchPassword = await user?.matchPassword(password)

  if (user && matchPassword) {
    const token = genToken(res, user._id)
    res.status(200).json(RESPONSES.auth(user, token))
  } else {
    res.status(401)
    throw new Error(RESPONSES.err.invalidCredentials)
  }
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
const signOutUser = asyncHandler(async (req, res) => {
  res.cookie(GLOBAL.cookie, '', {
    httpOnly: true,
    expires: expire,
  })

  res.status(200).json(RESPONSES.signout)
})

// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  }

  res.status(200).json(RESPONSES.profile(user))
})

// @desc Update user profile
// @route POST /api/v1/users/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.status(200).json(RESPONSES.update(updatedUser))
  } else {
    res.status(404)
    throw new Error(RESPONSES.err[404]('USER'))
  }
})

const userController = {
  authUser,
  registerUser,
  signOutUser,
  getUserProfile,
  updateProfile,
}
export default userController
