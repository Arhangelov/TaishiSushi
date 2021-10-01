import { useState, useEffect, useContext } from 'react';

//UserContext
import { Context } from "../../../Context/UserContext";

//Service
import { getUserCart, deleteFromCart } from '../../../services/sushiService';

import { TiDeleteOutline } from 'react-icons/ti';


const Cart = () => {
    const [user, setUser] = useContext(Context);
    const [cart, setCart] = useState([]);

    //Getting user cart array------------------------------------------------
    useEffect(() => {
        getUserCart(user._id)
          .then(res => {
              console.log(res);
              setCart(res)
            })
          .catch((error) => console.log(error.message));
    },[]);

    //Delete product from cart -----------------------------------------------
    const deleteHandler = (sushiId, userId) => {
        
          deleteFromCart(sushiId, userId)
            .then(cart => setCart(cart));
    }


    return (
        <>  
            <table>

            <thead>
                <tr>
                    <th colSpan='4'>Shopping Cart</th>
                </tr>
            </thead>
                {cart.map((sushi) => 
                    <tbody key={sushi.id}>
                        <tr>
                            <td><img src={sushi.imageUrl} alt='Product Image' width='80' height='55'></img></td>
                            <td>{sushi.title}</td>
                            <td>{'x' + sushi.qty}</td>
                            <td>{(sushi.price * sushi.qty).toFixed(2)+'BGN'}</td>
                            <td><button onClick={deleteHandler.bind(this, sushi.id, user._id)}><TiDeleteOutline/></button></td>
                        </tr>
                        
                    </tbody>
                )}               
            </table>
        </>
    )
}

export default Cart;