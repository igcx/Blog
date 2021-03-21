const fs = require('fs')

// fs.readFile('a.txt', 'utf8', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })

function read(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) return console.log(err)
    callback(data)
  })
}

read('a.txt', data => {
  console.log(data)
  read('b.txt', data => {
    console.log(data)
    read('c.txt', data => {
      console.log(data)
    })
  })
})


