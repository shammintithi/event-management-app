import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    (async () => {
      const site = await api.getSiteContent();
      setAbout(site.about);
    })();
  }, []);

  if (!about) return <div className="max-w-5xl mx-auto p-6">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{about.title}</h1>
      <p className="text-gray-700 mb-4">{about.body}</p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {about.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 border rounded-lg p-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}