const fs = require('fs')
const { kill } = require('process')
const { getUsers } = require('../helpers')

const users = getUsers()

module.exports = {
  name: 'users',
  description: 'Get list of registered users',
  usage: ' ',
  execute(message, args) {
    let printMessage = `\`\`\`\n`
    users.forEach((user) => {
      printMessage = printMessage.concat(`${user}\n`)
    })
    printMessage = printMessage.concat(`\`\`\``)

    message.channel.send(printMessage)
  },
}
