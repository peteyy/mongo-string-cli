var clipboard = require('copy-paste')
var program = require('commander')

var pckg = require('../package')
var parser = require('./parser')

program
  .version(pckg.version)
  .parse(process.argv)

var mongoConnectionString = program.args[0]

if (!mongoConnectionString) {
  console.error('No argument provided')
  process.exit(1)
}

var url = parser(mongoConnectionString)

console.log(url)

clipboard.copy(url)

console.log('mongo command copied to clipboard...')
