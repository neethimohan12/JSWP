// generateUsers.js
const fs = require('fs');
const { faker } = require('@faker-js/faker');

// Function to generate a single user
function createUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
    },
    website: faker.internet.url(),
    jobTitle: faker.name.jobTitle(),
  };
}

// Generate multiple users
const users = [];
for (let i = 0; i < 10; i++) {
  users.push(createUser());
}

// Save to users.json
fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf-8');
console.log("✅ 10 fake users generated and saved to users.json");