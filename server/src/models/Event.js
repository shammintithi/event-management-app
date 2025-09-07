const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  // Unique id from seed, or mongoose _id used
  externalId: { type: String, index: true, unique: false, required: false },
  kind: { type: String, required: true }, // religious, corporate, educational, wedding, momentous, culinary
  title: { type: String, required: true },
  date: { type: Date },
  venue: { type: String },
  description: { type: String },
  services: [{ type: String }],
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
