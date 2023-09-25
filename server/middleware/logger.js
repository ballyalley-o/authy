import 'colors'

// const logger = (logType, msg, color) => {}

const logger = {
  error: (message) => console.log(message.bgRed),
  db: (message) => console.log(message.bgGreen),
}

export default logger
