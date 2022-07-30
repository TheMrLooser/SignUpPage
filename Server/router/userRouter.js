const {signUp,signIn} = require('../controler/userControler.js');
const express = require('express');

const router = express.Router();

router.post('/signUp',signUp)
router.post('/signIn',signIn)
module.exports = router