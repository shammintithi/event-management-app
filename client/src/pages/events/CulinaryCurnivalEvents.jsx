import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import EventCard from "../../components/EventCard";

export default function CulinaryCurnivalEvents() {
  const [items, setItems] = useState(null);
  useEffect(() => { (async () => setItems(await api.listEvents("culinary")))(); }, []);
  if (!items) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  return (
    <section className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Culinary Curnival</h1>
        <p className="text-gray-600">Food festivals, cook-offs, and tastings.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => <EventCard key={i.id} item={i} />)}
      </div>
    </section>
  );
}