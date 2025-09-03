const users = [
  { email: "user@example.com", phone: "01712345678", password: "Strong@123", name: "Tithi", booked: [] }
];

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        alert(`Welcome, ${user.name}!`);
        window.location.href = "../index.html"; // redirect after login
    } else {
        alert("Invalid credentials!");
    }
});


