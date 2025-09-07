import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import EventCard from "../components/EventCard";

export default function Home() {
  const [site, setSite] = useState(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    (async () => {
      const s = await api.getSiteContent();setSite(s);
      // pick some featured events from multiple categories
      const mix = [
        ...(await api.listEvents("corporate")).slice(0,1),
        ...(await api.listEvents("wedding")).slice(0,1),
        ...(await api.listEvents("culinary")).slice(0,1),
      ];
      setFeatured(mix);
    })();
  }, []);

  if (!site) return <div className="max-w-7xl mx-auto p-6">Loading...</div>;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{site.hero.headline}</h1>
            <p className="mt-4 text-lg text-gray-700">{site.hero.sub}</p>
            <Link to={site.hero.cta.to} className="inline-flex mt-6 rounded-md bg-indigo-600 px-4 py-2 text-white">
              {site.hero.cta.label}
            </Link>
          </div>
          <img
            src="https://picsum.photos/seed/hero-happenhub/900/600"
            alt="Event montage"
            className="rounded-xl border"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold">Featured Events</h2>
          <p className="text-gray-600">A quick taste of what we produce.</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => <EventCard key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
}
