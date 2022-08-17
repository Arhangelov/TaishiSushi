import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../../Context/UserContext';
import { getHistoryOrders, historyToCart } from '../../../services/profileService';

const Profile = ({ history }) => {
    const [user] = useContext(Context);
    const [historyOrder, setHistoryOrder] = useState([]);
    
    //Getting history of orders -----------------------------------------------
    useEffect(() => {
        getHistoryOrders(user._id)
            .then(order => setHistoryOrder(order))
    }, [user]);

    const orderHandler = (cart, userId) => {
        historyToCart(cart, userId)
            .then(history.push('/cart'))
    }

    return (
        <>
            <h1>{user.username} Profile Page</h1>

            <h3>My Orders</h3>
            <hr/>
            {historyOrder.map((order) => 
                <tbody key={order.id}>
                <tr>
                    <td>{order.currDate}</td>
                    <td>{order.cart.map((sushi) => sushi.title + ', ')}</td>
                    <td>{order.finalPrice}</td>
                    <button onClick={orderHandler.bind(this, order.cart, user._id)}>Order Again</button>
                    <hr/>
                    
                </tr>
                </tbody>
            
            )}
            
        </>
    )
}

export default Profile;
