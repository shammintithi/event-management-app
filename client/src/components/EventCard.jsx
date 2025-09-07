export default function EventCard({ item }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white">
      <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">
          {item.date} • {item.venue}
        </p>
        <p className="text-gray-700">{item.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {item.services.map((s) => (
            <span key={s} className="text-xs rounded-full border px-2 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}