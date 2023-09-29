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
      console.log('SERVER PORT:'.bgBlue, PORT.yellow)
      console.log('SERVER STATUS:'.bgBlue, 'CONNECTED'.yellow)
    } else {
      console.log('SERVER PORT:'.bgRed, PORT)
      console.log('SERVER STATUS: NOT CONNECTED'.bgRed)
    }
  },
  // db LOGS
  db: (host, dbName, isConnected) => {
    console.log('DB HOST: '.bgGreen, host.yellow)
    console.log('DB NAME: '.bgGreen, dbName.yellow)
    if (isConnected) {
      console.log('DB STATUS: '.bgGreen, 'CONNECTED'.green)
    } else {
      console.log('DB STATUS: '.bgGreen, 'NO CONNECTION'.red)
    }
  },
}

export default logger
