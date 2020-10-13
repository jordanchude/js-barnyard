const Animal = require('../Animal')

class Snake extends Animal {
    constructor(props) {
        super(props)
        this.thingsEaten = []
    }

    bit(item) {
        if (this.thingsEaten.length <= 4) {
            this.thingsEaten.push(item)
            console.log(`${this.name} ate ${item}!`)
        } else {
            console.log(`${this.name} is full and wants to nap.`);
        }
    }
}

module.exports = Snake;