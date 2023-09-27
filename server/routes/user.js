import express from 'express'
import userController from '../controllers/user.js'

const router = express.Router()

router.post('/', userController.registerUser)
router.post('/auth', userController.authUser)
router.post('/logout', userController.logoutUser)
router
  .route('/profile')
  .get(userController.getUserProfile)
  .post(userController.updateProfile)

const userRouter = router
export default userRouter
