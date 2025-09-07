import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import EventCard from "../../components/EventCard";

export default function WeddingEngagementEvents() {
  const [items, setItems] = useState(null);
  useEffect(() => { (async () => setItems(await api.listEvents("wedding")))(); }, []);
  if (!items) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  return (
    <section className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Wedding & Engagement</h1>
        <p className="text-gray-600">From intimate vows to grand receptions.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => <EventCard key={i.id} item={i} />)}
      </div>
    </section>
  );
}