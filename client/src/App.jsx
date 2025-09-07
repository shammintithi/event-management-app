import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginRegistration from "./pages/LoginRegistration";

import ReligiousEvents from "./pages/events/ReligiousEvents";
import CorporateEvents from "./pages/events/CorporateEvents";
import EducationalEvents from "./pages/events/EducationalEvents";
import WeddingEngagementEvents from "./pages/events/WeddingEngagementEvents";
import MomentousOccasionEvents from "./pages/events/MomentousOccasionEvents";
import CulinaryCurnivalEvents from "./pages/events/CulinaryCurnivalEvents";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/religious" element={<ReligiousEvents />} />
          <Route path="/events/corporate" element={<CorporateEvents />} />
          <Route path="/events/educational" element={<EducationalEvents />} />
          <Route path="/events/wedding-engagement" element={<WeddingEngagementEvents />} />
          <Route path="/events/momentous-occasion" element={<MomentousOccasionEvents />} />
          <Route path="/events/culinary-curnival" element={<CulinaryCurnivalEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginRegistration />} />
        </Routes>
      </main>
      <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Happenhub. All rights reserved.
      </footer>
    </div>
  );
}
