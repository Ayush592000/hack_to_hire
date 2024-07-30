const express = require('express');
const { getClassType } = require('../controllers/index');
const { getLocations } = require('../controllers/locations');
const { getSearchFlights } = require('../controllers/searchingFlights');
const router = express.Router();

router.get('/class-types', getClassType);
router.get('/locations', getLocations);
router.post('/search-flights', getSearchFlights);

module.exports = router;
