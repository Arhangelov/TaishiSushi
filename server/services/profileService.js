const User = require('../models/User')

async function getHistoryOrder ( userId ) {

    const user = await User.findById(userId);

    return user.purchaseHistory;
};

async function historyToCart ( userId, cart ) {
    
    const user = await User.findById(userId);

    user.cart.push(...cart) 

    return user.save();
}

module.exports = {
    getHistoryOrder,
    historyToCart
}