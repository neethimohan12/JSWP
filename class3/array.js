// let myarray = ["Apple" , "Banana" ,"Mango" ,
//     23,45,true,false,{ city: "NYC"},];


//     let last =myarray.length;
//     last--;
// //console.log(myarray[7]);
// console.log(myarray[myarray.length] - 1);
//  myarray.length = 7;
//  console.log(myarray);

//  myarray.push("Anything");
//  myarray.push(12);

//  myarray.unshift(12112);

//  console.log(myarray);

//  myarray.shift();
//   myarray.pop();
//    myarray.pop();
//   console.log(myarray);

// let month = ["Jan","Feb","May","June"];
// month.splice(2,0,"Mar","April");

// console.log(month);
// month.splice(4, 2);
// console.log(month);


//  let animals = ["Dog", "cat","elephant"];
//  animals.splice(2,1 ,"rabit");
//  console.log(animals.indexOf("rabit"));
//   console.log(animals.indexOf("snake"));
//   console.log(animals.includes("snake"));

// let numbers = [3, 4, 5, 8, 90, 100];

// //let mynumber = numbers.findIndex((num) => num > 79);
// let mynumber = numbers.find((num) => num > 79);
// console.log(mynumber);

let prices =[19.99 , 29.99 , 39.99];

prices.forEach(function (price, index){
    console.log(`Item ${index + 1}: $${price}');   `)
})