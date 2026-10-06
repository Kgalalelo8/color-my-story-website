class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)

    }

    sleeping(){
        console.log(`This ${this.name} is alive `)
    }
}
class Fish extends Animal{
    name = `Fish`
}


const fish = new Fish()




console.log(fish.alive)