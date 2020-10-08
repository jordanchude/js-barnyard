const Animal = require('../Animal')

class Sheep extends Animal {
    
    constructor(props) {
        super(props)
        this.isShorn = props.isShorn || false
    }
        
    shear() {
        if (!this.isShorn) {
            this.isShorn = true
            console.log(`${this.name} is now naked, and you have a basket full of wool.`)
        } else {
            console.log(`${this.name} has already been shorn!`)
        }
    }
}

module.exports = Sheep