// src/components/EventCard.jsx
import React from "react";

export default function EventCard({ item }) {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 ${item.bgColor || "bg-white"}`}
    >
      {/* Event Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Event Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
        {item.date && (
          <p className="text-sm text-gray-600 mb-1">📅 {item.date}</p>
        )}
        <p className="text-sm text-gray-600 mb-2">📍 {item.venue}</p>
        <p className="text-gray-700 mb-3">{item.description}</p>

        {/* Services */}
        {item.services && (
          <ul className="flex flex-wrap gap-2">
            {item.services.map((service, index) => (
              <li
                key={index}
                className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
              >
                {service}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
