// Temporary frontend check (replace with backend check later)
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginError = document.getElementById('loginError');

adminLoginBtn.addEventListener('click', () => {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Temporary hardcoded admin credentials
    if(username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "admin_dashboard.html"; // later connect backend
    } else {
        loginError.style.display = "block";
    }
});
