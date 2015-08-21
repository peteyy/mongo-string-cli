var clipboard = require('copy-paste')
var program = require('commander')

var pckg = require('../package')
var parser = require('./parser')

program
  .version(pckg.version)
  .parse(process.argv)

var url = parser(program.args[0])

console.log(url)

clipboard.copy(url)

console.log('mongo command copied to clipboard...')
