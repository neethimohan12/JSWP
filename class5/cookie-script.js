let cookies = 0;
let grandmas = 0;
const cookie = document.getElementById('cookie');
const cookieDisplay = document.getElementById('cookieCount');
const grandmaBtn = document.getElementById('buyGrandma');
const grandmaDisplay = document.getElementById('grandmaCount');
// Click the cookie!
cookie.addEventListener('click', function() {
cookies++;
cookieDisplay.textContent = cookies;
// Make cookie wiggle
this.style.transform = 'rotate(20deg)';
setTimeout(() => {
this.style.transform = 'rotate(-20deg)';
setTimeout(() => {
this.style.transform = 'rotate(0deg)';
}, 100);
}, 100);
});

grandmaBtn.addEventListener('click', function() {
if (cookies >= 10) {
cookies -= 10;
grandmas++;
cookieDisplay.textContent = cookies;
grandmaDisplay.textContent = grandmas;
// Grandmas bake cookies automatically!
setInterval(() => {
cookies += grandmas;
cookieDisplay.textContent = cookies;
}, 1000);
}
});