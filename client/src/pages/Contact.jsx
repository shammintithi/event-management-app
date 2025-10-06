// src/pages/Contact.jsx
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { Link } from "react-router-dom";

export default function Contact() {
  const [c, setC] = useState(null);

  useEffect(() => {
    (async () => setC((await api.getSiteContent()).contact))();
  }, []);

  if (!c) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 bg-fixed">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif italic">HappenHub</Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="hover:text-indigo-100">Home</Link>
            <div className="group relative">
              <button className="hover:text-indigo-100">Events ▾</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg w-48 z-50">
                <Link to="/events/religious" className="block px-4 py-2 hover:bg-purple-100">Religious</Link>
                <Link to="/events/corporate" className="block px-4 py-2 hover:bg-purple-100">Corporate</Link>
                <Link to="/events/wedding-engagement" className="block px-4 py-2 hover:bg-purple-100">Wedding</Link>
                <Link to="/events/culinary-curnival" className="block px-4 py-2 hover:bg-purple-100">Culinary</Link>
                <Link to="/events/educational" className="block px-4 py-2 hover:bg-purple-100">Educational</Link>
                <Link to="/events/home-party" className="block px-4 py-2 hover:bg-purple-100">Home Party</Link>
                <Link to="/events/momentous-occasion" className="block px-4 py-2 hover:bg-purple-100">Momentous</Link>
              </div>
            </div>
            <Link to="/about" className="hover:text-indigo-100">About</Link>
            <Link to="/contact" className="hover:text-indigo-100 font-semibold">Contact</Link>
            <Link to="/login" className="hover:text-indigo-100">Login</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 max-w-7xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-800">{c?.title}</h1>
          <p className="text-gray-600 mt-2">{c?.sub}</p>
        </header>

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto rounded-xl border p-6 space-y-2 bg-white shadow-md">
          <p><strong>Email:</strong> {c?.email}</p>
          <p><strong>Phone:</strong> {c?.phone}</p>
          <p><strong>Address:</strong> {c?.address}</p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 max-w-3xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-300"/>
          <input type="email" placeholder="Your Email" className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-300"/>
          <textarea placeholder="Your Message" className="border rounded-md px-3 py-2 h-32 focus:ring-2 focus:ring-purple-300"></textarea>
          <button type="button" className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition">Send (demo)</button>
        </form>
      </section>
    </div>
  );
}
