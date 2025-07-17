class Counter{
    constructor() {
        this.count = 0;
        this.increment = this.increment.bind(this);

    }

    increment(){
        this.count++;
        console.log(`Count: ${this.count}`);

    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);