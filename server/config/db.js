import mongoose from 'mongoose'
// constants
import { GLOBAL } from '../constants/index.js'
// logger
import { logger } from '../middleware/index.js'

const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(GLOBAL.db_uri)
    logger.db(GLOBAL.db_host, GLOBAL.db_name, true)
  } catch (error) {
    logger.error(error.message)
    process.exit(1)
  }
}

export default connectDB
