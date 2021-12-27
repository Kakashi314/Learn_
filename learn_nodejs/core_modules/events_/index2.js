const hasan = require('./hasan')
const Student = new hasan
Student.on('hi', (s) => {
    let name = s.replace('I am ', '')
    console.log('class started');
    console.log(`hi ${name}.I'm AI`);
})

Student.intro()