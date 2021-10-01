const Sushi = require('../models/Sushi');
const User = require('../models/User')

async function addSushi ( data ) {
    return new Sushi(data).save();
};

async function getNewest () { 

    return Sushi.find().limit(3);
};

async function getType (type) {
    return  Sushi.find({type: `${type}`});
};

async function getDetails (id) {
    return Sushi.findById(id);
};

async function addToCart (data) {
    const user = await User.findById(data.userId)
    console.log('[DEBUG]', user.cart, data.qty)

    delete data.userId

    const currentSushi = user.cart.find(s => s.title === data.title)
    const index = user.cart.indexOf(currentSushi)

    if(currentSushi) {
        user.cart[index].qty += data.qty;

    } else {
        user.cart.push(data)
    }

    console.log(['USER CART'], user.cart)
    return user.save() 
};

async function getUserCart(userId) {

    const user = await User.findById(userId)

    return user.cart
};

async function deleteFromCart({sushiId, userId}) {
    
    const user = await User.findById(userId)
    // const sushi = user.cart.filter(s => s.id !== sushiId)
    console.log(sushi);

    //  delete sushi;
     return sushi;
}



module.exports = {
    addSushi,
    getNewest,
    getType,
    getDetails,
    addToCart,
    getUserCart,
    deleteFromCart
}