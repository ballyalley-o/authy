import express from 'express'
import userController from '../controllers/user.js'
// @middleware
import { protect } from '../middleware/index.js'

const router = express.Router()

router.post('/', userController.registerUser)
router.post('/auth', userController.authUser)
router.post('/signout', userController.signOutUser)
router
  .route('/profile')
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateProfile)

const userRouter = router
export default userRouter
