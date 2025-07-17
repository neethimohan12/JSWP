console.log(`Hello Node.js`);
console.log(`This is the process platform ${process.platform}`);
console.log(`This is the process args ${process.argv}`);
console.log(`This is the process version ${process.version}`);
console.log(`This is the process cwd ${process.cwd()}`);


let myVar = true;
if (myVar){
    console.log(`App ran without issues`);
    process.exit(0);
}else{
    console.log(`App ran into issues`);
    process.exit(1);
}


