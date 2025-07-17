const form = document.getElementById('userForm');
const result = document.getElementById('formResult');
// Form submission
form.addEventListener('submit', function(e) {
e.preventDefault(); // Stop page reload
const formData = {
username: document.getElementById('username').value,
email: document.getElementById('email').value,
country: document.getElementById('country').value
};
result.innerHTML = `
<h3>Form Submitted!</h3>
<p>Username: ${formData.username}</p>
<p>Email: ${formData.email}</p>
<p>Country: ${formData.country}</p>
`;
});

document.getElementById('email').addEventListener('blur', function() {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(this.value)) {
this.style.borderColor = 'red';
} else {
this.style.borderColor = 'green';
}
});