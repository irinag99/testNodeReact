var express = require('express');
var router = express.Router();
const appsController = require('../controllers/appsController');
const { Router } = require('express');


/* GET users listing. */
router.get('/', appsController.vista);
router.get('/:id', appsController.vistaId);
router.delete('/:id/delete', appsController.delete); 
router.get('/:id/edit', appsController.edit);
router.post('/:id/edit', appsController.modificar);
router.post('/create', appsController.create)
router.post('/add', appsController.addCart);


module.exports = router;
