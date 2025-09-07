import React, { useState } from "react";
import EventCard from "./EventCard";

export default function Events({ events }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? events : events.slice(0, 3);

  const bookEvent = (index) => {
    alert(`Booked: ${displayed[index].name}`);
  };

  return (
    <section className="events">
      <h2>Events</h2>
      <div className="event-list">
        {displayed.map((ev, i) => <EventCard key={i} ev={ev} index={i} onBook={bookEvent} />)}
      </div>
      {events.length > 3 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less Events" : "View All Events"}
        </button>
      )}
    </section>
  );
}
