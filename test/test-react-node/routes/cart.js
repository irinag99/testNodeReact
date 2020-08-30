const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");


router.get("/", cartController.index);
/* router.delete('/product', cartController.delete);
router.post("/buy",cartController.buy) */

module.exports = router; 