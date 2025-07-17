const user = {
    name: "Alice",
    greet: function (greet = "Hi") {
        return `${greet} ${this.name}`;
    },
    };

    console.log(user.greet());
    const testGreet = user.greet.bind(user, "Hey"); //by using this we can access the property name else we wont be able to access it.
    console.log(testGreet());