import 'colors'

const logger = {
  // custom
  custom: (message, color) => console.log(message[color]),
  // error LOG
  error: (message) => console.log(message.bgRed),
  // info
  info: (message) => console.log(message.bgBlue),
  // server LOG
  server: (PORT, isConnected) => {
    if (isConnected) {
      console.log('SERVER PORT: '.bgCyan, PORT)
      console.log('SERVER STATUS: CONNECTED'.bgCyan)
    } else {
      console.log('SERVER PORT: ', PORT)
      console.log('SERVER STATUS: NOT CONNECTED'.red)
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
