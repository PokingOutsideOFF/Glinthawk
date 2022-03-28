const { createRide, deleteRide, getRide} = require('../controllers/ride.controller');
const router = require('express').Router();

router.post('/', createRide);

router.get('/', getRide);

router.delete('/', deleteRide);

module.exports = router;