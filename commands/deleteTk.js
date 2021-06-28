const fs = require('fs')

module.exports = {
  name: 'delete-tk',
  description:
    'deletes a team kill from the list. type the command followed by the id. You can get the id from $full-tk-list',
  usage: '<id>',
  execute(message, args) {
    const rawData = fs.readFileSync('team-kill-data.json')
    const teamKillData = JSON.parse(rawData)

    if (args.length != 1) {
      throw 'incorrect arguents'
    }

    const id = parseInt(args[0])

    teamKillData.forEach((tk, i) => {
      if (id === tk.id) {
        if (i > -1) {
          teamKillData.splice(i, 1)
        }
      }
    })

    const updatedTeamKillData = JSON.stringify(teamKillData)
    fs.writeFileSync('team-kill-data.json', updatedTeamKillData)

    message.channel.send('Removed Team Kill')
  },
}
