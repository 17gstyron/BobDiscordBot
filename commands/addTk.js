const fs = require('fs')
const { getUsers } = require('../helpers')

const users = getUsers()

module.exports = {
  name: 'add-tk',
  description:
    'Adds a team kill to the list. After the command is the killers name followed by the victims',
  usage: '<killer> <victim>',
  execute(message, args) {
    const rawData = fs.readFileSync('team-kill-data.json')
    const teamKillData = JSON.parse(rawData)

    const lastIdRaw = fs.readFileSync('lastId.json')
    const lastId = JSON.parse(lastIdRaw)

    if (args.length != 2) {
      throw 'incorrect arguents'
    }

    const killer = args[0].toUpperCase()
    const victim = args[1].toUpperCase()
    const id = lastId + 1
    fs.writeFileSync('lastId.json', `${id}`)

    if (!users.includes(killer) || !users.includes(victim)) {
      throw 'One of the args are not registered Names'
    }

    teamKillData.push({
      killer,
      victim,
      id,
    })

    const updatedTeamKillData = JSON.stringify(teamKillData)
    fs.writeFileSync('team-kill-data.json', updatedTeamKillData)

    message.channel.send('Added Team Kill')
  },
}
