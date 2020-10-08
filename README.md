# JavaScript Barnyard (React Prep)

Time: 1 hour (plus however long you want to play)

## Classes in JavaScript

JS classes are not too dissimilar from classes in Ruby or Python. If you're familiar with object-oriented programming, you'll see some structures that look pretty familiar.

* The constructor function is called `constructor`... so that's easy. This function runs when a new instance is created and initializes any instance variables.
* `this` is used to tell an object (in this case a class instance) to refer to itself -- not unlike `self` in some other languages.
* `extends` allows classes to inherit from a parent class; `super` can be used within a child class to refer to the parent.
* Method syntax can vary, but all methods in these examples are defined with the following pattern:

```javascript
methodName (arguments) {
    // method logic goes here
}
```

## Props

JS classes can accept positional arguments just fine:

```javascript
class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const jeremy = new Human('Jeremy', 666)
// jeremy.name will return "Jeremy"; jeremy.age will return 666
```

The classes in this repo, however, are designed to accept a single object as an argument on instantiation -- this is a pattern used in React, and the object is often referred to as "props," which is short for "properties." (In practice, it's not too unlike Python's `kwargs`.) Take a look at the above, refactored to accept props:

```javascript
class Human {
    constructor(props) {
        this.name = props.name
        this.age = props.age
    }
}

const jeremy = new Human({name: 'Jeremy', age: 666})
// jeremy.name will return "Jeremy"; jeremy.age will return 666
```

You can use either method for general JS OOP, but get used to seeing `props` in React.

## OK, what do I do here?

### 1. Scope it out
The files in this repo are designed as modular classes that can be imported into a Node environment. `Animal` is the parent class, and child classes are contained in the `species` directory. Clone this repo and click around in VSCode -- look for at least one example of each concept mentioned above, and try to wrap your head around it.

### 2. Fire it up and play in the barnyard
In your VSCode terminal, start Node by typing `node`, then let's import some classes and instances from `index.js` and `script.js`. Paste these two lines into your Node shell:

```bash
const { Animal, Dog, Cat, Pig, Sheep, Chicken, Bull } = require('./index')
const { Monique, Spike, Leo, Lawrence, Laura, Sal, Perry, Tina, Pia, Tim, animals } = require('./script')
```

Now all of the above variables should be available to you in your Node shell. Type `animals` and you should see all of the current animals listed in an array. Type an animal's name and you should be able to access the individual object. Now do some stuff!

* Make a new animal instance of whatever type you like. (Check `script.js` for hints.)
* Look at the methods defined for `Animal` and for each subclass. Make the animals do stuff! Wallow! Eat! Charge! Make friends! Try stuff! Can Laura eat `'a paper bag'`? Can Perry charge `'a truck'`? Can Leo fetch `'the paper'`? Can Spike make friends with `'a fence'`? Can Lawrence eat Pia??? Zoiks!
* Spike is a very friendly dog. Have him try to make friends with everybody: `animals.forEach(animal => Spike.makeFriends(animal))`
* Perry is a very angry bull. Have him try to `charge` everybody by altering the code above.
* Do whatever! Try to break it.

### 3. Make another child class
Create a new subclass of `Animal` in a new file in the `species` directory. Make it whatever you like. Give it some special properties or methods or both. Import the file in your Node shell (example: `const Duck = require('./species/Duck)`) and create a new instance of your `Duck` or `Rabbit` or whatever. See if it can eat some stuff and make some friends!

## Nice work!

If you're comfortable here, then you know slightly _more_ than you need to know about JS OOP in order to get started with React. Great!
