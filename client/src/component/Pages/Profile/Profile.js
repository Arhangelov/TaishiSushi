import { useContext, useEffect, useState } from 'react';

import { Context } from '../../../Context/UserContext';
import { getHistoryOrders, historyToCart } from '../../../services/profileService';

const Profile = () => {
    const [user] = useContext(Context);
    const [history, setHistory] = useState([]);
    
    //Getting history of orders -----------------------------------------------
    useEffect(() => {
        getHistoryOrders(user._id)
            .then(histOrders => setHistory(histOrders))
    }, [user]);

    const orderHandler = (cart, userId) => {
        historyToCart(cart, userId)
            .then(cart => console.log(cart))
    }

    return (
        <>
            <h1>{user.username} Profile Page</h1>

            <h3>My Orders</h3>
            <hr/>
            {history.map((order) => 
                <tbody key={order.id}>
                <tr>
                    <td>{order.currDate}</td>
                    <td>{order.cart.map((sushi) => sushi.title + ', ')}</td>
                    <td>{order.finalPrice}</td>
                    <button onClick={orderHandler.bind(this, order.cart, user._id)}>Order again</button>
                    <hr/>
                    
                </tr>
                </tbody>
            
            )}
            
        </>
    )
}

export default Profile;
