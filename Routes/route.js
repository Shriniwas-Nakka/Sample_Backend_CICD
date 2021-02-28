const route = require('express').Router();
const sampleController = require('../Controller/sampleController');

route.post('/user/add', sampleController.addEmployeeController);

module.exports = route;