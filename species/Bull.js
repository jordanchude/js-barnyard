const Animal = require('../Animal')

class Bull extends Animal {
    
    constructor(props) {
        super(props)
        this.thingsCharged = []
    }
        
    charge(item) {
        if (this.thingsCharged.length <= 4) {
            this.thingsCharged.push(item)
            console.log(`${this.name} has charged ${item}. Wow, he's angry!`)
        } else {
            console.log(`${this.name} is angry at EVERYTHING. He's very tired now, so instead of charging ${item}, he decided to lay down.`)
        }
    }
}

module.exports = Bull