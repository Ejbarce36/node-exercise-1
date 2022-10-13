const fs = require('fs')
const process = require('process')
const args = process.argv.slice(2)

fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) throw err
  // eslint-disable-next-line no-console
  const split = data.split('\n')
  data.split('\n').forEach((d, idx) => {
    const text = (idx+1)+': '+d
    console.log(text)
  })
})

