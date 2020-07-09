const router = require('express').Router();

router.get('/', require('../../controllers/candidate').get);

module.exports = router;