const fs = require('fs')
const process = require('process')

const { readFile, writeFile } = require('node:fs')

const line = process.argv.slice(2)
const arr = []

if (line.length < 2) {
  console.log('error need one more')
}

fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  const split = data.split('\n')
  data.split('\n').forEach((d, idx) => {
    const text = `${idx + 1}: ${d}`
    arr.push(text)
  })
})

if (process.argv[2] === undefined) {
  console.log('needs an argument of path.')
} else if (process.argv[3] === undefined) {
  console.log('a second argument is needed.')
} else if (process.argv[4] !== undefined && process.argv[4] !== '-n' && process.argv[4] !== '-y') {
  console.log(`${process.argv[4]} it's not a valid argument! (Expected '-n', '-y' or undefined)`)
} else {
  readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      console.log(err.message)
    } else {
      writeFile(process.argv[3], data.split('\n').map((element, index) => `${index + 1}: ${element}`).join('\n'), { flag: process.argv[4] === undefined || process.argv[4] === '-n' ? 'wx' : 'w' }, (errWriteFile) => {
        if (errWriteFile) {
          console.log(errWriteFile.message)
        }
      })
    }
  })
}
