class Brand {

    constructor() {
        if (new.target == Brand) {
            throw new Error("Error, can't instantiate abstract class")
        }
    }

    introduceProductToManagement() {
        console.log("please override")
    }

    getFeature() {
        console.log("please override")
    }
}

class Toyota extends Brand {
    constructor(type, engine) {
        super();
        this.type = type;
        this.engine = engine;
    }


    introduceProductToManagement() {
        console.log(`We will release a new product with type : ${this.type}`)
    }

    getFeature() {
        console.log(`Specifications => \n type ${this.type}  \n engine: ${this.engine}`)
    }
}

class PublicCar extends Toyota {

    constructor(type, engine, color, rate) {
        super(type, engine);
        this.color = color;
        this.rate = rate;
    }

    getFeature() {
        console.log(`Public Car Specifications => \n type ${this.type} \n engine: ${this.engine} \n color: ${this.color} \n rate/km: ${this.rate}`)
    }
}

class PrivateCar extends Toyota {
    #fuel = "High voltage electricity";
    constructor(type, engine) {
        super(type, engine);
    }

    introduceProductToManagement(architect) {
        console.log(`We will release a new product with type : ${this.type} designed by ${architect}`)
    }

    getFeature() {
        console.log(`Private Car Specifications => \n type: ${this.type} \n engine: ${this.engine} \n fuel: ${this.#fuel}`)
    }
}

const carolla = new PublicCar("Bus", "Disel", "Black", 100000);
if (carolla instanceof Toyota) {
    carolla.introduceProductToManagement();
    carolla.getFeature();
}


console.log("---------------------")


const priusPrime = new PrivateCar("Toyota Prius Prime", "Electric Engine");
if (priusPrime instanceof Toyota) {
    priusPrime.introduceProductToManagement("Qirara");
    priusPrime.getFeature();
}
