const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

/**
 * GET /api/events/:kind
 * List events by kind
 * kinds: religious, corporate, educational, wedding, momentous, culinary
 * supports pagination: ?page=1&limit=12
 */
router.get('/:kind', eventsController.listByKind);

/**
 * GET /api/events/id/:id
 * Get single event by mongo _id
 */
router.get('/id/:id', eventsController.getEvent);

/**
 * Admin endpoints (create/update/delete) - no auth in this demo
 */
router.post('/', eventsController.createEvent);
router.patch('/id/:id', eventsController.updateEvent);
router.delete('/id/:id', eventsController.deleteEvent);

module.exports = router;