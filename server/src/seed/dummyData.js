// This file mirrors the dummy data you used in the frontend
const hero = {
  headline: "Plan. Produce. Amaze.",
  sub: "Happenhub is your partner for unforgettable events—religious, corporate, educational, weddings, momentous occasions, and culinary curnivals.",
  cta: { label: "Explore Events", to: "/events/corporate" },
};

const about = {
  title: "About Happenhub",
  body:
    "We are an end-to-end event management team delivering strategy, design, production, logistics, and on-site execution. From intimate ceremonies to city-scale festivals, we handle everything.",
  bullets: [
    "End-to-End Event Production",
    "Data-Driven Planning",
    "Vendor Network & Protocol",
    "Safety & Compliance First",
  ],
};

const contact = {
  title: "Contact Us",
  email: "hello@happenhub.test",
  phone: "+880-1234-567890",
  address: "Level 5, Lakeshore Tower, Dhaka",
};

const authCopy = {
  title: "Login / Registration",
  note: "This is a demo screen. Hook up your backend when ready.",
};

const religiousEvents = [
  {
    externalId: "rel-1",
    kind: "religious",
    title: "Eid-ul-Fitr Congregation & Community Iftar",
    date: "2025-04-01",
    venue: "City Convention Hall",
    description:
      "Full end-to-end arrangement: prayer hall decor, audio, volunteer flow, community Iftar, and security.",
    services: ["Venue Decor", "Catering", "Security", "Audio/Video"],
    image: "https://picsum.photos/seed/religious1/800/500",
  },
  {
    externalId: "rel-2",
    kind: "religious",
    title: "Durga Puja Cultural Evening",
    date: "2025-10-05",
    venue: "Riverside Pandal",
    description:
      "Stage management, cultural lineup, lighting, and crowd management for Puja celebrations.",
    services: ["Stage", "Lighting", "Artists", "Permits"],
    image: "https://picsum.photos/seed/religious2/800/500",
  },
];

const corporateEvents = [
  {
    externalId: "corp-1",
    kind: "corporate",
    title: "Annual Tech Summit 2025",
    date: "2025-11-20",
    venue: "Grand Hyatt Ballroom",
    description:
      "Keynotes, breakout tracks, expo booths, and live streaming production for 2,000+ attendees.",
    services: ["Production", "Registration", "Expo Ops", "AV", "Livestream"],
    image: "https://picsum.photos/seed/corp1/800/500",
  },
  {
    externalId: "corp-2",
    kind: "corporate",
    title: "Startup Demo Day",
    date: "2025-06-14",
    venue: "Innovation Hub",
    description:
      "Investor lounge, pitch stage, jury management, brand design, and post-event PR.",
    services: ["Stage", "Branding", "Investor Relations", "PR"],
    image: "https://picsum.photos/seed/corp2/800/500",
  },
];

const educationalEvents = [
  {
    externalId: "edu-1",
    kind: "educational",
    title: "University Convocation",
    date: "2025-02-25",
    venue: "Main Arena",
    description:
      "Stage fabrication, graduate flow, VIP protocol, and photo booths for memories.",
    services: ["Stage", "Logistics", "Photography", "VIP"],
    image: "https://picsum.photos/seed/edu1/800/500",
  },
  {
    externalId: "edu-2",
    kind: "educational",
    title: "STEM Olympiad",
    date: "2025-08-18",
    venue: "Campus Grounds",
    description:
      "Multi-venue coordination, judging, sponsor booths, and award night.",
    services: ["Coordination", "Judging", "Sponsorship", "Awards"],
    image: "https://picsum.photos/seed/edu2/800/500",
  },
];

const weddingEvents = [
  {
    externalId: "wed-1",
    kind: "wedding",
    title: "Wedding & Reception of Aisha & Rafi",
    date: "2025-12-12",
    venue: "Lakeside Palace",
    description:
      "Theme decor, food curation, guest management, and cinematic coverage.",
    services: ["Decor", "Catering", "Guest Mgmt", "Cinematography"],
    image: "https://picsum.photos/seed/wed1/800/500",
  },
  {
    externalId: "wed-2",
    kind: "wedding",
    title: "Engagement of Shila & Nabil",
    date: "2025-03-04",
    venue: "Garden Pavilion",
    description:
      "Intimate setup with floral aisle, live music, and dessert bar.",
      services: ["Florals", "Music", "Dessert Bar", "Host"],
    image: "https://picsum.photos/seed/wed2/800/500",
  },
];

const momentousEvents = [
  {
    externalId: "mom-1",
    kind: "momentous",
    title: "Golden Jubilee Celebration",
    date: "2025-09-15",
    venue: "City Arena",
    description:
      "Parade, fireworks (licensed), dignitary protocol, and grand stage performances.",
    services: ["Parade", "Fireworks", "Protocol", "Stage"],
    image: "https://picsum.photos/seed/mom1/800/500",
  },
  {
    externalId: "mom-2",
    kind: "momentous",
    title: "City Day Festival",
    date: "2025-01-06",
    venue: "Central Square",
    description:
      "Multi-day fair with local artisans, cultural nights, and food courts.",
    services: ["Fair Ops", "Cultural", "Food Courts", "Permits"],
    image: "https://picsum.photos/seed/mom2/800/500",
  },
];

const culinaryEvents = [
  {
    externalId: "cul-1",
    kind: "culinary",
    title: "Culinary Curnival: Street Food Fiesta",
    date: "2025-07-22",
    venue: "Expo Grounds",
    description:
      "Food truck alley, hygiene compliance, live cook-offs, and influencer zone.",
    services: ["Food Trucks", "Compliance", "Competitions", "PR"],
    image: "https://picsum.photos/seed/cul1/800/500",
  },
  {
    externalId: "cul-2",
    kind: "culinary",
    title: "Gourmet Week",
    date: "2025-05-03",
    venue: "Downtown Atrium",
    description:
      "Chef’s tables, wine pairings (non-alcoholic alternatives), and tasting sessions.",
    services: ["Chef’s Tables", "Pairings", "Tastings", "Branding"],
    image: "https://picsum.photos/seed/cul2/800/500",
  },
];

module.exports = {
  hero,
  about,
  contact,
  authCopy,
  religiousEvents,
  corporateEvents,
  educationalEvents,
  weddingEvents,
  momentousEvents,
  culinaryEvents,
};