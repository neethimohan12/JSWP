//triangle
for (let i = 1; i <= 10; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

//diamond

const size = 5; // should be an odd number for symmetry

// Top half
for (let i = 1; i <= size; i += 2) {
  let spaces = " ".repeat((size - i) / 2);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

// Bottom half
for (let i = size - 2; i >= 1; i -= 2) {
  let spaces = " ".repeat((size - i) / 2);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

//checkboard

const size1 = 5;

for (let row = 0; row < size1; row++) {
  let line = "";

  for (let col = 0; col < size1; col++) {
    line += "*"
    
  }

  console.log(line);
}