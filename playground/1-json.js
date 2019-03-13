const fs = require('fs')
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Sean'
data.planet = 'unknown'
data.age = 'n/a'
fs.writeFileSync('1-json.json', JSON.stringify(data))