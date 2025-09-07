const SiteContent = require('../models/SiteContent');

exports.getAllSiteContent = async (req, res, next) => {
  try {
    const docs = await SiteContent.find().lean();
    const result = {};
    docs.forEach((d) => (result[d.key] = d.data));
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getSiteContentByKey = async (req, res, next) => {
  try {
    const key = req.params.key;
    const doc = await SiteContent.findOne({ key }).lean();
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc.data);
  } catch (err) {
    next(err);
  }
};

// Admin style create/update
exports.upsertSiteContent = async (req, res, next) => {
  try {
    const key = req.params.key;
    const data = req.body;
    const doc = await SiteContent.findOneAndUpdate({ key }, { data }, { upsert: true, new: true });
    res.json(doc);
  } catch (err) {
    next(err);
  }
};
