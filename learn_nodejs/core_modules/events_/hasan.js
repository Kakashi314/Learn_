const EventEmitter = require('events'); //class
class hasan extends EventEmitter {
    intro() {
        this.emit('hi', 'I am Hasan'); //raise
    }

}
module.exports = hasan;