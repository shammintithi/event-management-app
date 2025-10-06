import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  "block px-4 py-2 hover:text-indigo-600 " + (isActive ? "text-indigo-600 font-medium" : "text-gray-700");

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const events = [
    { label: "Religious Events", to: "/events/religious" },
    { label: "Corporate Events", to: "/events/corporate" },
    { label: "Educational Events", to: "/events/educational" },
    { label: "Wedding and Engagement", to: "/events/wedding-engagement" },
    { label: "Momentous Occasion", to: "/events/momentous-occasion" },
    { label: "Culinary Carnival", to: "/events/culinary-carnival" },
  ];

  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur z-50 border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between relative">
          <Link to="/" className="text-2xl font-bold tracking-tight">Happenhub</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            {/* Events dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setEventsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={eventsOpen}
              >
                Events
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {eventsOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-lg border bg-white shadow-lg z-50">
                  <ul className="py-1">
                    {events.map((e) => (
                      <li key={e.to}>
                        <NavLink
                          to={e.to}
                          className={({ isActive }) =>
                            "block px-4 py-2 hover:bg-gray-50 " + (isActive ? "text-indigo-600 font-medium" : "text-gray-700")
                          }
                        >
                          {e.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                "ml-2 inline-flex items-center rounded-md border px-3 py-1.5 text-sm " +
                (isActive
                  ? "border-indigo-600 text-indigo-600"
                  : "border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600")
              }
            >
              Login / Registration
            </NavLink>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t py-2">
            <NavLink to="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>About</NavLink>

            <details className="px-2">
              <summary className="cursor-pointer px-2 py-2 text-gray-700 hover:text-indigo-600">Events</summary>
              <ul className="ml-2">
                {events.map((e) => (
                  <li key={e.to}>
                    <NavLink
                      to={e.to}
                      className={navLinkClass}
                      onClick={() => setMobileOpen(false)}
                    >
                      {e.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>

            <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
            <NavLink to="/login" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Login / Registration
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
