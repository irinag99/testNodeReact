var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController');


/* GET users listing. */
router.get('/', categoryController.vista);
router.get('/:id', categoryController.vistaId);



module.exports = router;
