const url = `http://localhost:5001/profile`;

export const getHistoryOrders = ( userId ) => {
    return fetch (url + `/${userId}`, {
        method: 'GET',
        headers: {'Content-type': 'application/json'}
    }).then(res => res.json())
}

export const historyToCart = ( cart, userId) => {
    return fetch ( url + `/${userId}` , {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(cart)
    }).then(res => res.json())
}