// src/pages/LoginRegistration.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginRegistration() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login & register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login" : "register";

    try {
      const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin ? { email, password } : { name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Success!");
        setEmail("");
        setPassword("");
        setName("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again later");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar (same as Home page) */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif italic">
            HappenHub
          </Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="hover:text-indigo-100">Home</Link>
            <div className="group relative">
              <button className="hover:text-indigo-100">Events ▾</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg w-48 z-50">
                <Link to="/events/religious" className="block px-4 py-2 hover:bg-purple-100">Religious</Link>
                <Link to="/events/corporate" className="block px-4 py-2 hover:bg-purple-100">Corporate</Link>
                <Link to="/events/wedding" className="block px-4 py-2 hover:bg-purple-100">Wedding</Link>
                <Link to="/events/culinary" className="block px-4 py-2 hover:bg-purple-100">Culinary</Link>
                <Link to="/events/educational" className="block px-4 py-2 hover:bg-purple-100">Educational</Link>
                <Link to="/events/home-party" className="block px-4 py-2 hover:bg-purple-100">Home Party</Link>
                <Link to="/events/momentous-occasion" className="block px-4 py-2 hover:bg-purple-100">Momentous</Link>
              </div>
            </div>
            <Link to="/about" className="hover:text-indigo-100">About</Link>
            <Link to="/contact" className="hover:text-indigo-100">Contact</Link>
            <Link to="/login" className="hover:text-indigo-100">Login</Link>
          </div>
        </div>
      </nav>

      {/* Login/Register Card */}
      <div className="flex items-center justify-center min-h-screen pt-24 px-6">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-purple-800">{isLogin ? "Login" : "Register"}</h1>
          {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 px-4 py-2 text-white font-semibold hover:opacity-90 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-purple-700 font-semibold hover:underline"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
              }}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
