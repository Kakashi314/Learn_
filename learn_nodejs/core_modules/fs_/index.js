const fs = require('fs');


// fs.writeFileSync('write.txt', 'adskandsk')
fs.appendFileSync('./fs_/write.txt', 'adsakdms')
const data = fs.readFileSync('./fs_/read.txt')
    // console.log(data.toString());

fs.readFile('./fs_/read.txt', (data, error) => {
    console.log(data.toString())

})