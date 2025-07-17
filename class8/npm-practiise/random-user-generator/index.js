const fs = require('fs');
const { faker } = require('@faker-js/faker');

// Generate a single user
// const user = {
//   name: faker.person.firstName(),
//   email: faker.internet.email(),
//   phone: faker.phone.number(),
//   address: faker.location.streetAddress(),
//   city: faker.location.city(),
//   country: faker.location.country(),
//   company: faker.company.name(),
// };

//Multiple users

const users = [];

for (let i = 0; i < 10; i++) {
  users.push({
    id: i + 1,
    name: faker.person.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    country: faker.location.country()
  });
}


// Save the user to a JSON file
fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

console.log('10 Random users saved to users.json');