class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(food){
        console.log(`${this.name} is eating ${food}`);
    }
    sleeping(){
        console.log(`${this.name} is sleeping `);

    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name, age);
        this.breed=breed;
    }

    bark(){
        console.log(`${this.name} is barking`);
    }

    getInfo(){
        console.log(`This kind of dog is ${this.breed} and name is ${this.name}`);

    }

}

class Cat extends Animal{
    constructor(name,age,breed){
        super(name, age);
        this.breed=breed;
    }

    bark(){
        console.log(`${this.name} is meowing`);
    }

    getInfo(){
        console.log(`This kind of cat is ${this.breed} and name is ${this.name}`);

    }

}

const jane = new Cat("Jane",12,"Persian");
const bruno = new Dog("bruno",5,"pug");
jane.getInfo();
jane.eat("meat");
jane.bark();
bruno.getInfo();
bruno.sleeping();