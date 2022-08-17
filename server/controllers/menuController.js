const router = require('express').Router();

const { getType, getDetails, addToCart, getUserCart, deleteFromCart, finishOrder } = require('../services/sushiService');

router.get('/sets', (req, res) => {
    getType('Set')
        .then(sushi => {
            res.json(sushi);
        });
});

router.get('/uramaki', (req, res) => {
    getType('Uramaki')
        .then(sushi => {
            res.json(sushi);
        });
});

router.get('/futomaki', (req, res) => {
    getType('Futomaki')
        .then(sushi => {
            res.json(sushi);
        });
});

router.get('/hosomaki', (req, res) => {
    getType('Hosomaki')
        .then(sushi => {
            res.json(sushi);
        });
});

router.get('/nigiri', (req, res) => {
    getType('Nigiri')
        .then(sushi => {

            res.json(sushi);
        });
});

router.get('/sashimi', (req, res) => {
    getType('Sashimi')
        .then(sushi => {
            res.json(sushi);
        });
});

router.get('/details/:id', (req, res) => {
    getDetails(req.params.id)
        .then(sushiDetails => {
            res.json(sushiDetails);
        });
});

router.post('/add-to-cart', (req, res) => {

    addToCart(req.body)
        .then(cart => {
            res.json(cart);
        })
        .catch((err) =>{
            res.json({
            status: 404,
            message: `${err.message}`,
            type: "ERROR",
          });  
        });
    });

router.get('/get-cart/:userId', (req, res) => {

    getUserCart(req.params.userId)
        .then(cart => {
            res.json(cart);
        });
});

router.post('/delete-from-cart/', (req, res) => {

    deleteFromCart(req.body)
        .then(cart => {
            res.json(cart)
        })
        .catch(err => {
            res.json({
                status: 404,
                message: `${err.message}`,
                type: "ERROR",
              });
        })
});

router.post('/finish-order/:userId/:finalPrice', (req, res) => {

    finishOrder(req.params)
        .then(history => {
            res.json(history)
        })
    
})


module.exports = router;