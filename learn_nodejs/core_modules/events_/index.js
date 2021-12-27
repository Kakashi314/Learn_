const EventEmitter = require('events'); //class
const emiter = new EventEmitter(); //obj
emiter.on('hi', (s) => {
        let name = s.replace('I am ', '')

        console.log(`hi ${name} I'm AI`);
    }) //lisiner


emiter.emit('hi', 'I am Hasan'); //raise