const user = {
    name : "neethi",
    greet: function() {
        console.log(`Hello,Iam ${this.name}`);
    },
    };
 //same using =>

    const user1 = {
  name: "neethi",
};

const greet = () => {
 // console.log(`Hello` +age);
  console.log(`Hello, I am ${user1.name}`);
   //console.log(user.age);
};

greet();