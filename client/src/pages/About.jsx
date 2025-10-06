// src/pages/About.jsx
import { aboutContent } from "../db/about";
import { Link } from "react-router-dom";

export default function About() {
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
            <Link to="/about" className="hover:text-indigo-100 font-semibold">About</Link>
            <Link to="/contact" className="hover:text-indigo-100">Contact</Link>
            <Link to="/login" className="hover:text-indigo-100">Login</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800">{aboutContent.headline}</h1>
        <p className="text-gray-600 mt-2 text-lg">{aboutContent.sub}</p>
      </section>

      {/* About Sections */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <img src={aboutContent.image} alt="About" className="rounded-xl shadow-lg" />
        <div className="space-y-6">
          {aboutContent.sections.map((s, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-700">{s.title}</h2>
              <p className="text-gray-700 mt-2">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
