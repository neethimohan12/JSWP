class Car{
    constructor(make,brand,year,color){
        this.make=make;
        this.brand=brand;
        this.year=year;
        this.color=color;
        this.speed=0;
    }

    getInfo(){
        console.log(`${this.color} ${this.brand} ${this.year} ${this.color}`);
    }

    accelerate(amount){
        this.speed += speed;
     if(amount > 0){
       console.log(`Car is accelerating by ${amount},the new speed is ${this.speed}`);
    
     }else {
            console.log(`Please provide the speed`);
        }
    }

    brake(amount){
        if(this.speed > 0){
            this.speed -= amount;
            console.log(`Car is deccelerating by ${amount},the new speed is ${this.speed}`);
        }

    }
}

const toyota = new Car("Camry","Toyota",2024,"Blue");

toyota.getInfo();
toyota.accelerate(20);
toyota.accelerate(70);