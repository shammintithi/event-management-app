import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function LoginRegistration() {
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    (async () => setCopy((await api.getSiteContent()).authCopy))();
  }, []);

  if (!copy) return <div className="max-w-5xl mx-auto p-6">Loading...</div>;
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-1">{copy.title}</h1>
      <p className="text-gray-600 mb-6">{copy.note}</p>

      <div className="rounded-xl border bg-white p-6 space-y-4">
        <input className="w-full border rounded-md px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded-md px-3 py-2" placeholder="Password" type="password" />
        <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white">Login (demo)</button>
        <div className="text-center text-sm text-gray-500">— or —</div>
        <button className="w-full rounded-md border px-4 py-2">Create Account (demo)</button>
      </div>
    </div>
  );
}