import 'colors'

const logger = {
  // custom
  custom: (message, color) => console.log(message[color]),
  // error
  error: (message) => console.log(message.bgRed),
  // info
  info: (message) => console.log(message.bgBlue),
  // server
  server: (PORT, isConnected) => {
    if (isConnected) {
      console.log('SERVER PORT:'.bgBlue, PORT.yellow)
      console.log('SERVER STATUS:'.bgBlue, 'CONNECTED'.yellow)
    } else {
      console.log('SERVER PORT:'.bgRed, PORT)
      console.log('SERVER STATUS: NOT CONNECTED'.bgRed)
    }
  },
  // db
  db: (db, isConnected) => {
    console.log('DB HOST: '.bgGreen, db.connection.host.yellow)
    console.log('DB NAME: '.bgGreen, db.connection.name.yellow)
    if (isConnected) {
      console.log('DB STATUS: '.bgGreen, 'CONNECTED'.green)
    } else {
      console.log('DB STATUS: '.bgGreen, 'NO CONNECTION'.red)
    }
  },
}

export default logger
