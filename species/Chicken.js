const Animal = require('../Animal')

class Chicken extends Animal {

    constructor(props) {
        super(props)
        this.eggsLayed = 0
    }
        
    layEggs(numberOfEggs) {
        this.eggsLayed += numberOfEggs
        console.log(`${this.name} just layed ${numberOfEggs} eggs. She's layed ${this.eggsLayed} so far!`)
    }
}

module.exports = Chicken