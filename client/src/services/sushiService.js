const url = `http://localhost:5001/`;
const urlMenu = `http://localhost:5001/menu/`;


export const addSushi = ( sushiData ) => {
    return fetch(url + 'add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sushiData)
    }).then(res => res.json())
}

export const getSushi = ( sushiData ) => {
    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sushiData)
    }).then(res => res.json())
}

export const getSushiType = ( sushiType ) => {
    return fetch(urlMenu + `${sushiType}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then(res => res.json())
}

export const getSushiDetails = ( sushiId ) => {
    return fetch (urlMenu + 'details/' + `${sushiId}`, {
        method: 'GET',
        headers: {'Content-type': 'application-json'}
    }).then(res => res.json())
}

export const pushToCart = ( sushi, userId, qty ) => {
    const test = {...sushi, userId, qty}
    return fetch(urlMenu + 'add-to-cart', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(test)
    }).then(res => res.json())
}

export const getUserCart = (userId) => {
    return fetch(urlMenu + 'get-cart/' + `${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
}

export const deleteFromCart = (sushiId, userId) => {
    return fetch(urlMenu + 'delete-from-cart', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({sushiId, userId})
    }).then(res => res.json())
}

export const finishOrder = ( userId, finalPrice ) => {
    return fetch(urlMenu + 'finish-order/' + `${userId}/` + `${finalPrice}`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    }).then(res => res.json())
}
