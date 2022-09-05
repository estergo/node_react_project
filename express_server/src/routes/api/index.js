const router = require('express').Router();

router.use('/auth', require('./auth'));
// router.use('/candidates', require('./candidate'));

module.exports = router;