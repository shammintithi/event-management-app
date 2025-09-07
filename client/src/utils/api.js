// Simulate async fetching from db folder (could be replaced by real API later)
import { religiousEvents } from "../db/religious";
import { corporateEvents } from "../db/corporate";
import { educationalEvents } from "../db/educational";
import { weddingEvents } from "../db/wedding";
import { momentousEvents } from "../db/momentous";
import { culinaryEvents } from "../db/culinary";
import { hero, about, contact, authCopy } from "../db/site";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export const api = {
  async getSiteContent() {
    await delay(200);
    return { hero, about, contact, authCopy };
  },
  async listEvents(kind) {
    await delay(250);
    switch (kind) {
      case "religious": return religiousEvents;
      case "corporate": return corporateEvents;
      case "educational": return educationalEvents;
      case "wedding": return weddingEvents;
      case "momentous": return momentousEvents;
      case "culinary": return culinaryEvents;
      default: return [];
    }
  },
};
