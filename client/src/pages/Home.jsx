// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import EventCard from "../components/EventCard";

export default function Home() {
  const [site, setSite] = useState(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    (async () => {
      const s = await api.getSiteContent();
      setSite(s);
      const mix = [
        ...(await api.listEvents("corporate")).slice(0, 1),
        ...(await api.listEvents("wedding")).slice(0, 1),
        ...(await api.listEvents("culinary")).slice(0, 1),
      ];
      setFeatured(mix);
    })();
  }, []);

  if (!site) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 bg-fixed">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <Link to="/" className="text-2xl font-bold font-serif italic">HappenHub</Link>

          {/* Menu */}
          <div className="flex gap-6 items-center relative">
            <Link to="/" className="hover:text-indigo-100">Home</Link>

            {/* Events Dropdown */}
            <div className="group relative">
              <button className="hover:text-indigo-100">Events ▾</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg w-48 z-50">
                <Link to="/events/religious" className="block px-4 py-2 hover:bg-purple-100">Religious</Link>
                <Link to="/events/corporate" className="block px-4 py-2 hover:bg-purple-100">Corporate</Link>
                <Link to="/events/wedding-engagement" className="block px-4 py-2 hover:bg-purple-100">Wedding</Link>
                <Link to="/events/culinary-curnival" className="block px-4 py-2 hover:bg-purple-100">Culinary</Link>
                <Link to="/events/educational" className="block px-4 py-2 hover:bg-purple-100">Educational</Link>
                <Link to="/events/momentous-occasion" className="block px-4 py-2 hover:bg-purple-100">Momentaous Occasion</Link>
              </div>
            </div>

            <Link to="/about" className="hover:text-indigo-100">About</Link>
            <Link to="/contact" className="hover:text-indigo-100">Contact</Link>
            <Link to="/login" className="hover:text-indigo-100">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800">
              {site.hero.headline}
            </h1>
            <p className="mt-4 text-lg text-gray-700">{site.hero.sub}</p>
            <Link
              to={site.hero.cta.to}
              className="inline-flex mt-6 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-white hover:opacity-90"
            >
              {site.hero.cta.label}
            </Link>
          </div>
          <img
            src="./public/images/home.jpg"
            alt="Event montage"
            className="rounded-xl border"
          />
        </div>
      </section>

      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg shadow-sm">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-700">Featured Events</h2>
          <p className="text-gray-600">A quick taste of what we produce.</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => <EventCard key={item.id} item={item} />)}
        </div>
      </section>

    </div>
  );
}
