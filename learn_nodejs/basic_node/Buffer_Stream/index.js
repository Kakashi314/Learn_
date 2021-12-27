const fs = require('fs');
const creantSteam = fs.createReadStream(`${__dirname}/data.txt`, 'utf-8');
creantSteam.on('data', (chank) => {
    console.log(chank);
})