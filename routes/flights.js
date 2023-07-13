var express = require('express');
var router = express.Router();

//create controller module
const flightsCtrl = require('../controllers/flights');

//GET route for /flights
router.get('/', flightsCtrl.index);
//GET route for flights/new
router.get('/new', flightsCtrl.new);
//GET /flights/:id
router.get('/:id', flightsCtrl.show);
//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
