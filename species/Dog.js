const Animal = require('../Animal')

class Dog extends Animal {

    talk(sound="Bark Bark!") {
        super.talk(sound)
    }
        
    fetch(item) {
        console.log(`${this.name} has brought you ${item} and is eager for your approval.`)
    }
}

module.exports = Dog