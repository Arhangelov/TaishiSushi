const router = require('express').Router();

const { getType, getDetails, addToCart, getUserCart, deleteFromCart } = require('../services/sushiService');

router.get('/sets', (req, res) => {
    getType('Set')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/uramaki', (req, res) => {
    getType('Uramaki')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/futomaki', (req, res) => {
    getType('Futomaki')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/hosomaki', (req, res) => {
    getType('Hosomaki')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/nigiri', (req, res) => {
    getType('Nigiri')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/sashimi', (req, res) => {
    getType('Sashimi')
        .then(sushi => {
            console.log(sushi);
            res.json(sushi);
        });
});

router.get('/details/:id', (req, res) => {
    getDetails(req.params.id)
        .then(sushiDetails => {
            console.log((sushiDetails));
            res.json(sushiDetails);
        });
});

router.post('/add-to-cart', (req, res) => {

    addToCart(req.body)
        .then(cart => {
            console.log(cart);
            res.json(cart);
        });
});

router.get('/get-cart/:userId', (req, res) => {

    getUserCart(req.params.userId)
        .then(cart => {
            console.log(cart);
            res.json(cart);
        });
});

router.post('/delete-from-cart/', (req, res) => {

    deleteFromCart(req.body)
        .then(cart => {
            res.json(cart)
        })
})

module.exports = router;