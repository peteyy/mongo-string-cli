var format = require('util').format

module.exports = function (mongooseUri) {
  var nomongodb = mongooseUri.substring(10).split('@')

  var credentials = nomongodb[0].split(':')
  var username = credentials[0]
  var password = credentials[1]

  var serverName = nomongodb[1].split('/')

  var hosts = serverName[0].split(',')

  var primaryHost = hosts[hosts.length - 1]

  var appName = serverName[1].split('?')[0]

  return format('mongo --username %s --password %s --host %s %s', username, password, primaryHost, appName)
}
