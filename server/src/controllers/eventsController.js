const Event = require('../models/Event');

exports.listByKind = async (req, res, next) => {
  try {
    const kind = req.params.kind; // expecting e.g. "religious" etc.
    // allow pagination query params ?page=1&limit=12
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit || '12', 10)));
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Event.find({ kind }).sort({ date: 1 }).skip(skip).limit(limit).lean(),
      Event.countDocuments({ kind }),
    ]);

    res.json({ items, meta: { page, limit, total } });
  } catch (err) {
    next(err);
  }
};

exports.getEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id).lean();
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    next(err);
  }
};

// Basic create (admin usage)
exports.createEvent = async (req, res, next) => {
  try {
    const payload = req.body;
    const item = await Event.create(payload);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

// update & delete
exports.updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const updated = await Event.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return res.status(404).json({ message: 'Event not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Event.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
