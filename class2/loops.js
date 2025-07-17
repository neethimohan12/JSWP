//for (let i = 0; i < 6 ; i++) {
   //console.log(`The value of i is ${i}`);
//   console.log(`case 1  : The value of i is ${i + 1}`);
//}

//for (let i = 0; i <= 6 ; i++) {
   //console.log(`The value of i is ${i}`);
//   console.log(`case 2  : The value of i is ${i + 1}`);
//}

//for (let sec = 10; sec >= 1; sec--){
//   console.log(`${sec}`);
//}

//console.log("Happy New Year!");
   

//counter = 0;
//while (counter < 5) {
//    console.log(counter + 1);
//    counter++;
//}

for (let i = 1; i <= 10 ; i++) {
   console.log(`case 1  : The value of i is ${i}`);
   if (1===7) {
    console.log("Lucky number 7 found !");
    break;
   }
}


for (let i = 1; i <= 10 ; i++) {
  // console.log(`case 1  : The value of i is ${i}`);
   if ( i % 2 === 0) {
    //console.log("Lucky number 7 found !");
    continue;
   }
   console.log(`The value os is  ${i}`);
}

//nested loop

for(let row = 1;row <= 3;row++) {
    let line = " ******* ";
    let line = " ******* ";
    let line = " ******* ";
    let line = " ******* ";
    for (let col = 1;col <= 5; col++){
        line += "*";

    }
    console.log(line);
}
