const catalog = [
 { id: 1, name: 'Laptop', price: 50000 },
 { id: 2, name: 'Mobile', price: 20000 }
];
function loadCatalog() {
 const content = document.getElementById('content');
 content.innerHTML = "<h2>Catalog</h2>";
 for (let product of catalog) {
 content.innerHTML += `
 <div>
 <h3>${product.name}</h3>
 <p>₹${product.price}</p>
 <button onclick="addToCart('${product.name}')">Add to Cart</button>
 </div>
 `;
 }
}
function addToCart(name) {
 localStorage.setItem("selectedItem", name); 
 alert(name + " is added to cart!");
}
loadCatalog(); 
function validateRegistration() {
const username = document.getElementById('regUsername').value.trim();
const email = document.getElementById('regEmail').value.trim();
const password = document.getElementById('regPassword').value.trim();
if (username === "" || email === "" || password === "") {
alert("All fields are required.");
return false;
}
if (!email.includes("@")) {
alert("Please enter a valid email address.");
return false;
}
if (password.length < 6) {
alert("Password must be at least 6 characters long.");
return false;
}
alert("Registration successful!");
return true;
}
function validateLogin() {
const email = document.getElementById('loginEmail').value.trim();
const password = document.getElementById('loginPassword').value.trim();
if (email === "" || password === "") {
alert("Please enter both Email and Password.");
return false;
}
if (!email.includes("@")) {
alert("Please enter a valid email address.");
return false;
}
alert("Login successful!");
return true;
}
