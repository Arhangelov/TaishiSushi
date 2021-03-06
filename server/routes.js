const router = require('express').Router();

const authController = require('./controllers/authController');
const sushiController = require('./controllers/sushiController');
const homeController = require('./controllers/homeController');
const menuController = require('./controllers/menuController');
const profileController = require('./controllers/profileController');

router.use('/', homeController)
router.use('/auth', authController);
router.use('/add', sushiController);
router.use('/menu',  menuController);
router.use('/profile',  profileController);


module.exports = router;