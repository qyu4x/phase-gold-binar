class Animal {
    constructor() {
        if (new.target == Animal) {
            throw new Error("Error, can't instantiate abstract class")
        }
    }

    makeSound() {
        throw new Error("Abstract method  not implemented")
    }
}

class IndonesianCat extends Animal {

    #name;
    #feet;
    constructor(name, feet, color) {
        super();
        this.#name = name;
        this.#feet = feet;
        this._color = color;
    }


    makeSound() {
        console.log("Meoww")
    }

    getName() {
        return this.#name;
    }

    getFeet() {
        return this.#feet;
    }

    setName(name) {
        this.#name = name;
    }
}

class MixIndonesianCat extends IndonesianCat {

    constructor(name, feet, color) {
        super(name, feet, color);
    }
}

class JapaneseCat extends Animal {

    constructor(name, feet, breed) {
        super();
        this.name = name;
        this.feet = feet;
        this.breed = breed;
    }


    makeSound() {
        console.log("Miawww nyann")
    }
}

// const animal = new Animal(); error
// console.log(animal)

const indonesianCat = new IndonesianCat("Ai", 4, "white");
indonesianCat.makeSound();
console.log(indonesianCat.getName());
console.log(indonesianCat.getFeet());
indonesianCat.setName("Hoshi");
console.log(indonesianCat.getName());


console.log("------------------------------------")
const japaneseCat = new JapaneseCat("Persia Juliet", 4, "Persian")
console.log(japaneseCat);
console.log(japaneseCat.name);
console.log(japaneseCat.feet);
console.log(japaneseCat.breed);
japaneseCat.makeSound();

console.log("------------------------------------")
const mixIndonesianCat = new MixIndonesianCat("Neko", 4, "Blue");
console.log(mixIndonesianCat.getName());
console.log(mixIndonesianCat.getFeet());
console.log(mixIndonesianCat._color);