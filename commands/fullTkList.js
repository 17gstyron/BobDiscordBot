const fs = require('fs')

module.exports = {
  name: 'full-tk-list',
  description: 'Get full team kill list in dm',
  usage: ' ',
  execute(message, args) {
    const rawData = fs.readFileSync('team-kill-data.json')
    const teamKillData = JSON.parse(rawData)
    const printMessage = JSON.stringify(teamKillData, null, 4)

    message.author.send(`\`\`\`json\n ${printMessage}\`\`\``)
  },
}
