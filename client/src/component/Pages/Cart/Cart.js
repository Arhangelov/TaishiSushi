import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

//UserContext
import { Context } from "../../../Context/UserContext";
import { useCart, useDispatchCart } from "../../../Context/CartContext";

//Service
import { getUserCart, deleteFromCart, pushToCart, finishOrder } from '../../../services/sushiService';

import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';



const Cart = () => {
    const [user] = useContext(Context);
    const cart = useCart();
    const dispatch = useDispatchCart();

    // Getting user cart array-------------------------------------------------
    useEffect(() => {
        getUserCart(user._id)
          .then(res => {
            dispatch({ type: 'UPDATE', sushi: res });
            })
          .catch((error) => console.log(error.message));
    },[user, dispatch]);

    // Delete product from cart -----------------------------------------------
    const deleteHandler = (sushiId, userId) => {
        dispatch({ type: "REMOVE", sushiId });
        deleteFromCart(sushiId, userId);
    }

    // Decrement logic---------------------------------------------------------
    const incrementHandler = async (prod, userId) => {
        prod.qty++;
        dispatch({ type: "CHANGE", sushi: prod });
        await pushToCart(prod.id, userId, 1);
      };
    
      
      // Increment logic---------------------------------------------------------
      const decrementHandler = async (prod, userId) => {
        if (prod.qty > 1) {
          prod.qty--;
          dispatch({ type: "CHANGE", sushi: prod });
          await pushToCart(prod.id, userId, -1);
        }
    }

    
    // Total Price logic ----------------------------------------------------------
    const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 30 ? 0 : 2.99;
    const totalPrice = itemsPrice + shippingPrice;
    
    // Finish Order Handler -------------------------------------------------------
    const finishOrderHandler = async ( userId, totalPrice ) => {
        const finalPrice = totalPrice.toFixed(2);
        await finishOrder( userId, finalPrice )
    }

    return (
        <>  
            <table>

            <thead>
                <tr>
                    <th colSpan='4'>Shopping Cart</th>
                </tr>
            </thead>
                {(cart.length == 0 ?
                     'The cart is empty' : 
                     cart.map((sushi) => 
                     
                        <tbody key={sushi.id}>
                            <tr>
                                <td><img src={sushi.imageUrl} alt='Product Image' width='80' height='55'></img></td>
                                <td>{sushi.title}</td>
                                <td>{'x' + sushi.qty}</td>
                                <td>{(sushi.price * sushi.qty).toFixed(2)+'BGN'}</td>
                                <td><AiFillPlusCircle onClick={incrementHandler.bind(this, sushi, user._id)}/></td>
                                <td><AiOutlineMinusCircle onClick={decrementHandler.bind(this, sushi, user._id)}/></td>    
                                <td><button onClick={deleteHandler.bind(this, sushi.id, user._id)}><TiDeleteOutline/></button></td>
                            </tr>
                        </tbody>
                    )
                )}    
            </table>
            {cart.length !== 0 &&(
                <>
                    <hr></hr>
                    <div>Items Price: {itemsPrice.toFixed(2)}BGN</div>
                    <div>Shipping Price: {shippingPrice.toFixed(2)}BGN</div>
                    <div>Total Price: {totalPrice.toFixed(2)}BGN</div>

                    <button onClick={finishOrderHandler.bind(this, user._id, totalPrice )}>
                        <Link to='/finish-order'>Finish you'r order</Link>
                    </button>              
                </>
            )}
        </>
    )
}

export default Cart;