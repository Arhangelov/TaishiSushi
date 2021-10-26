const router = require('express').Router();

const { getHistoryOrder, historyToCart } = require('../services/profileService');

router.get('/:userId', (req, res) => {
    getHistoryOrder(req.params.userId)
        .then(orders => {
            res.json(orders);
        });
});

router.post('/:userId', (req, res) => {
    historyToCart(req.params.userId, req.body)
        .then(cart => {
            res.json(cart);
        });
});

module.exports = router;