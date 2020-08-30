var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const validator = require('../middlewares/validator');

/* GET users listing. */
router.post('/register', validator.register, userController.register);
router.post('/login', validator.login, userController.login);


module.exports = router;
