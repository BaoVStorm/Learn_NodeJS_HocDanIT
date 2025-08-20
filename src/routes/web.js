const express = require('express');
const router = express.Router();

// controller
const { getHomepage, getSample, getABC, postCreateUser } = require('../controllers/homeController');

router.get("/", getHomepage);
router.get("/sample", getSample);
router.get("/abc", getABC);
router.post('/create-user', postCreateUser);

module.exports = router;
