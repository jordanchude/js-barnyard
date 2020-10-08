const Animal = require('../Animal')

class Cat extends Animal {
    
    talk(sound="Meow!") {
        super.talk(sound)
    }
        
    fetch(item) {
        console.log(`${this.name} stares at both you and ${item} with utter contempt.`)
    }
}

module.exports = Cat