import 'colors'

const logger = {
  /**
   * @param {string} message - message
   * @param {property} color - color property for customization
   * @returns console message
   */
  custom: (message, color) => console.log(message[color]),

  /**
   * @param {string} message - message
   * @returns console message
   */
  error: (message) => console.log(message.bgRed),

  /**
   * @param {string} message - message
   * @returns console message
   */
  info: (message) => console.log(message.bgBlue),

  /**
   * server logger
   * @param {number} PORT - PORT number
   * @param {bool} isConnected - send signal to server if connected
   */
  server: (PORT, isConnected) => {
    if (isConnected) {
      console.log('SERVER PORT:'.bgBlue, PORT.yellow)
      console.log('SERVER STATUS:'.bgBlue, 'CONNECTED'.yellow)
    } else {
      console.log('SERVER PORT:'.bgRed, PORT)
      console.log('SERVER STATUS: NOT CONNECTED'.bgRed)
    }
  },
  /**
   * db logger
   * @param {string} db - connection
   * @param {bool} isConnected - send signal to the db method
   */
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
