import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Contact() {
  const [c, setC] = useState(null);

  useEffect(() => {
    (async () => setC((await api.getSiteContent()).contact))();
  }, []);

  if (!c) return <div className="max-w-5xl mx-auto p-6">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{c.title}</h1>
      <div className="rounded-xl border p-6 space-y-2 bg-white">
        <p><strong>Email:</strong> {c.email}</p>
        <p><strong>Phone:</strong> {c.phone}</p>
        <p><strong>Address:</strong> {c.address}</p>
      </div>

      <form className="mt-8 grid gap-4">
        <input className="border rounded-md px-3 py-2" placeholder="Your name" />
        <input className="border rounded-md px-3 py-2" placeholder="Your email" />
        <textarea className="border rounded-md px-3 py-2 h-32" placeholder="Your message"></textarea>
        <button type="button" className="rounded-md bg-indigo-600 px-4 py-2 text-white">
          Send (demo)
        </button>
      </form>
    </div>
  );
}
