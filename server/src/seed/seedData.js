/**
 * Run: npm run seed
 * - connects to DB
 * - inserts site content (upsert)
 * - inserts events (if collection empty will insert; if not, it upserts by externalId)
 */

require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Event = require('../models/Event');
const SiteContent = require('../models/SiteContent');
const data = require('./dummyData');

(async () => {
  try {
    await connectDB();

    console.log('Seeding site content...');
    const siteDocs = [
      { key: 'hero', data: data.hero },
      { key: 'about', data: data.about },
      { key: 'contact', data: data.contact },
      { key: 'authCopy', data: data.authCopy },
    ];

    for (const doc of siteDocs) {
      await SiteContent.findOneAndUpdate({ key: doc.key }, { data: doc.data }, { upsert: true, new: true });
      console.log(`Upserted site content: ${doc.key}`);
    }

    console.log('Seeding event documents...');
    const allEvents = [
      ...data.religiousEvents,
      ...data.corporateEvents,
      ...data.educationalEvents,
      ...data.weddingEvents,
      ...data.momentousEvents,
      ...data.culinaryEvents,
    ];

    for (const ev of allEvents) {
      // convert date strings to Date
      if (ev.date) ev.date = new Date(ev.date);
      // upsert by externalId if provided or by title fallback
      const query = ev.externalId ? { externalId: ev.externalId } : { title: ev.title };
      await Event.findOneAndUpdate(query, ev, { upsert: true, new: true });
      console.log(`Upserted event: ${ev.title}`);
    }

    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error', err);
    process.exit(1);
  }
})();