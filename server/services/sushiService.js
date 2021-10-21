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
    const user = await User.findById(data.userId);
    
    delete data.userId;
    
    const currentSushi = user.cart.find(s => s.title === data.title);
    
    if(currentSushi) {
        user.cart.remove(currentSushi);
        currentSushi.qty += data.qty;
        user.cart.push(currentSushi);

    } else {
        user.cart.push(data)
    }

    return user.save(); 
};

async function getUserCart(userId) {

    const user = await User.findById(userId)

    return user.cart
};

async function deleteFromCart({sushiId, userId}) {
    
    const user = await User.findById(userId);
    user.cart = user.cart.filter(s => s.id !== sushiId);

    user.save();
    return user.cart;
};

async function finishOrder({ userId, finalPrice }) {
    let showDate = new Date();
    let currDate = showDate.getDate()+'/'+(showDate.getMonth()+1);

    
    const user = await User.findById(userId);
    const cart = user.cart;
    
    if(!user.cart.length == 0) {
        user.purchaseHistory.push({currDate, cart, finalPrice});
        user.cart = [];
    } else {
        throw new Error(`You'r cart is empty`);
    }


    return user.save();
}



module.exports = {
    addSushi,
    getNewest,
    getType,
    getDetails,
    addToCart,
    getUserCart,
    deleteFromCart,
    finishOrder
}