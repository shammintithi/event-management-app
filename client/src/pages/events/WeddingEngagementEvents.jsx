// src/pages/events/WeddingEvents.jsx
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import EventCard from "../../components/EventCard";
import { Link, useNavigate } from "react-router-dom";

export default function WeddingEvents() {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const events = await api.listEvents("wedding");
      setItems(events);
    })();
  }, []);

  if (!items) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  // Handle booking
  const handleBook = (eventId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      alert(`✅ Booking successful for wedding event: ${eventId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 bg-fixed">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <Link to="/" className="text-2xl font-bold font-serif italic">
            HappenHub
          </Link>

          <div className="flex gap-6 items-center relative">
            <Link to="/" className="hover:text-indigo-100">Home</Link>

            {/* Dropdown */}
            <div className="group relative">
              <button className="hover:text-indigo-100">Events ▾</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg w-48 z-50">
                <Link to="/events/religious" className="block px-4 py-2 hover:bg-purple-100">Religious</Link>
                <Link to="/events/corporate" className="block px-4 py-2 hover:bg-purple-100">Corporate</Link>
                <Link to="/events/wedding-engagement" className="block px-4 py-2 hover:bg-purple-100">Wedding</Link>
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

      {/* Page Header */}
      <section className="pt-24 max-w-7xl mx-auto px-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-purple-800">Wedding & Engagement Events</h1>
          <p className="text-gray-600">Elegant and memorable wedding celebrations.</p>
        </header>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.id} className="relative border rounded-lg shadow-sm bg-white">
              <EventCard item={i} />
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => handleBook(i.id)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                >
                  Booked
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
