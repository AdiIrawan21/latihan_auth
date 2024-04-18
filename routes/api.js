var express = require('express');
var router = express.Router();

let { register } = require('../controllers/auth.controllers')
const passport = require('../lib/passport')

router.post('/register', register)

router.post('/login', passport.authenticate('local', {
    successRedirect: '/whoami',
    failureRedirect: '/login'
}))
module.exports = router;
