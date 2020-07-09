const router = require('express').Router();
const authCtrlr = require('../../controllers/auth');

router.post('/signin', authCtrlr.signin);

router.post('/signup', authCtrlr.signup);

module.exports = router;