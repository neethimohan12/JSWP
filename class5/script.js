const button = document.getElementById("click-button");
const counter = document.getElementById("counter");

let likes = 0;

button.addEventListener("click", function () {
  likes = likes + 1;
  counter.textContent = `Likes ${likes}`;
  button.style.transform = 'scale(1.2)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 200);
});

document.getElementById("test-button").addEventListener("click", () => {
  console.log("Test Button was clicked");
});

const div = document.getElementById("test-div");

div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "blue";
});

// 🔧 FIXED: Missing closing ) after "myText"
document.getElementById("myText").addEventListener("keypress", (e) => {
  console.log(`This key was pressed: ${e.key}`);
});