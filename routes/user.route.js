const router = require('express').Router();
const {addUser, getAllTripsInfo} = require('../controllers/user.controller');

router.post('/', addUser);

router.get('/', getAllTripsInfo);


module.exports = router;