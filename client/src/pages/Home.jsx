import React from "react";
import { Link } from "react-router-dom";
import events from "../db/events";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">EventHub</h1>
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="hover:text-blue-600 font-medium">About</Link>
            <Link to="/event" className="hover:text-blue-600 font-medium">Event</Link>
            <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/login" className="hover:text-white bg-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1470&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Discover & Book Amazing Events</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6 drop-shadow-lg">Join, explore, and manage events effortlessly.</p>
          <Link
            to="/event"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why EventHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p>Book events in just a few clicks. No hassle, no waiting.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
              <p>Find events near you or around the world. Never miss out!</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">Secure Login</h3>
              <p>Keep your account and bookings safe with secure authentication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-gray-500 mb-4">{event.date} | {event.location}</p>
                <Link to="/event" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
        <p className="text-lg md:text-xl mb-6">Sign up today and never miss your favorite events!</p>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 text-center px-6">
        <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/event" className="hover:text-white">Events</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
