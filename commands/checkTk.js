const fs = require('fs')
const { getUsers } = require('../helpers')

const users = getUsers()

module.exports = {
  name: 'check-tk',
  description: 'Print the current team kill stats',
  usage: ' ',
  execute(message, args) {
    const tkCount = users.reduce(
      (acc, curr) => ((acc[curr] = { killer: 0, victim: 0 }), acc),
      {},
    )

    const rawData = fs.readFileSync('team-kill-data.json')
    const teamKillData = JSON.parse(rawData)

    teamKillData.forEach((tk) => {
      tkCount[tk.killer].killer++
      tkCount[tk.victim].victim++
    })

    let printMessage = ''
    for (user in tkCount) {
      printMessage = printMessage.concat(
        `${user}:\`\`\`\n\tKiller-${tkCount[user].killer}\n\tVictim-${tkCount[user].victim}\`\`\`\n`,
      )
    }

    message.channel.send(printMessage)
  },
}
