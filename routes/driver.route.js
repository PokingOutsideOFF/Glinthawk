const router = require('express').Router();
const {addDriver, getDriver, reviewDriver} = require('../controllers/driver.controller');

router.post('/', addDriver);

router.get('/', getDriver);

router.patch('/:DriverId/review', reviewDriver);

module.exports = router;