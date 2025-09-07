const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// GET /api/site -> returns all site content keys
router.get('/', siteController.getAllSiteContent);

// GET /api/site/:key -> returns single content (hero, about, contact, authCopy)
router.get('/:key', siteController.getSiteContentByKey);

// Admin upsert
router.post('/:key', siteController.upsertSiteContent);

module.exports = router;