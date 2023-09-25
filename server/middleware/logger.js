import 'colors'

// const logger = (logType, msg, color) => {}

const logger = {
  // error LOG
  error: (message) => console.log(message.bgRed),
  // server LOG
  server: (PORT, isConnected) => {
    if (isConnected) {
      return console.log('SERVER PORT: CONNECTED', PORT.blue)
    } else {
      return console.log('SERVER PORT: DISCONNECTED', PORT.red)
    }
  },
  // db LOGS
  db: (message) => {
    console.log('DB HOST: ', message.bgGreen)
    console.log('DB NAME: ', message.bgGreen)
    console.log('DB STATUS: ', message.bgGreen)
  },
}

export default logger
