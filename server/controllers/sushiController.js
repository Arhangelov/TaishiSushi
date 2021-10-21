const router = require('express').Router();

const Sushi = require('../models/Sushi');
const {addSushi} = require('../services/sushiService');


router.post('/', (req, res) => {
    addSushi(req.body)
    .then(createdSushi => {
        res.status(201).json({message: 'Successfully created.'});
    }).catch(() => res.json({message: 'The sushi was not been created.'}))
});


module.exports = router;