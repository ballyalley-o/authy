import express from 'express'
import { authUser } from '../controllers/user.js'

const router = express.Router()

router.post('/auth', authUser)

const userRouter = router
export default userRouter
