import mongoose from 'mongoose'
// constants
import { GLOBAL } from '../constants/index.js'
// logger
import { logger } from '../middleware/index.js'

const connectDB = async (isConnected) => {
  try {
    const dbConnect = await mongoose.connect(GLOBAL.db_uri)
    logger.db(dbConnect, isConnected)
  } catch (error) {
    logger.error(error.message)
    process.exit(1)
  }
}

export default connectDB
