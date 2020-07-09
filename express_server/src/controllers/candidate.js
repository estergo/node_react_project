const db = require('../db/database');

exports.get = (req, res) => {
    db.all('SELECT * FROM candidate', function(err, candidates) {
        if (err) res.status(500).send({success: false, msg: err});
        res.json({success: true, candidates})
    });
}