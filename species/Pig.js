const Animal = require('../Animal')

class Pig extends Animal {
    
    constructor(props) {
        super(props)
        this.filthiness = props.filthiness || 0
    }
    
    talk(sound="Oink Oink!") {
        super.talk(sound)
    }
        
    wallow() {
        if (this.filthiness < 5) {
            this.filthiness += 1
            console.log(`${this.name} rolled in the muck and is now at filthiness level ${this.filthiness}.`)
        } else {
            console.log(`${this.name} is already as dirty as a li'l piggy could possibly be!`)
        }
    }
}

module.exports = Pig