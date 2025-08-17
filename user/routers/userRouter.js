const express = require("express");
const {create,login}= require("../controllers/userController")
const router = express.Router();

router.post("/register", create);
router.post("/login",login);

module.exports = router;
