import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

//Notification
import toast, { Toaster } from 'react-hot-toast';

//UserContext
import { Context } from "../../../Context/UserContext";
import { CartContext } from "../../../Context/CartContext";

//Service
import { getUserCart, deleteFromCart, pushToCart, finishOrder } from '../../../services/sushiService';

//Styles
import {Container} from './CartStyles';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';



const Cart = () => {
    const [user] = useContext(Context);
    const [cart, setCart] = useContext(CartContext);


    // Getting user cart array-------------------------------------------------
    useEffect(() => {
        // getUserCart(user._id)
        //   .then(res => {
        //       console.log(`HERE:`, res);
        //     setCart({ type: 'ADD', sushi: res });
        //     })
        //   .catch((error) => console.log(error.message));
    },[]);

    console.log(cart);

    // Delete product from cart -----------------------------------------------
    const deleteHandler = (sushiId, userId) => {
        deleteFromCart(sushiId, userId)
        .then(() => {
            const success = true;
            notify(success);
            // намираш индекса на супито вътре в картата и после го splice i zapazvash cartata na novo
            // setCart(cart.splice())
            // dispatch({ type: "REMOVE", sushiId });
            })
            .catch(error => {
                notify(error);
            })
    }

    // Decrement logic---------------------------------------------------------
    const incrementHandler = async (prod, userId) => {
        prod.qty++;
        // dispatch({ type: "CHANGE", sushi: prod });
        await pushToCart(prod.id, userId, 1);
      };
    
      
      // Increment logic---------------------------------------------------------
      const decrementHandler = async (prod, userId) => {
        if (prod.qty > 1) {
          prod.qty--;
        //   dispatch({ type: "CHANGE", sushi: prod });
          await pushToCart(prod.id, userId, -1);
        }
    }

    
    // Total Price logic ----------------------------------------------------------
    const itemsPrice = cart.reduce((a, c) => countPrice(a,c), 0);

    function countPrice (acc, cartItem) {

        if (cartItem !== undefined) {
            const currentCount = acc + cartItem.price * cartItem.qty;
        
            return currentCount;
        } else {
            cart.pop()
            return acc;
        }
    }
    const shippingPrice = itemsPrice > 30 ? 0 : 2.99;
    const totalPrice = itemsPrice + shippingPrice;
    
    // Finish Order Handler -------------------------------------------------------
    const finishOrderHandler = async ( userId, totalPrice ) => {
        const finalPrice = totalPrice.toFixed(2);
        await finishOrder( userId, finalPrice )
    };

    //Notification
    const notify = (success, error) =>{ 
        if(success === true) {
            toast.success(`Removing product from cart was successful`,{
                icon: '✏️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    }
                })
        } else {
            toast.error(`${error}`)
        }
        
    };

    console.log('CART:', cart);
    return (
        <Container>
        <Toaster/>  
            <table>

            <thead>
                <tr>
                    <th colSpan='4'>Shopping Cart</th>
                </tr>
            </thead>
                {(cart.length === 0 ?
                     'The cart is empty' : 
                     cart.map((sushi) => 
                     
                        <tbody key={sushi.id}>
                            <tr>
                                <td><img src={sushi?.imageUrl} alt='Sushi Product' width='80' height='55'/></td>
                                <td>{sushi.title}</td>
                                <td>{'x' + sushi.qty}</td>
                                <td>{(sushi.price * sushi.qty).toFixed(2)+'BGN'}</td>
                                <td><AiFillPlusCircle onClick={() => incrementHandler(sushi, user._id)}/></td>
                                <td><AiOutlineMinusCircle onClick={() => decrementHandler(sushi, user._id)}/></td>    
                                <td><button onClick={() => deleteHandler(sushi.id, user._id)}><TiDeleteOutline/></button></td>
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
                        <Link to='/finish-order'>Finish your order</Link>
                    </button>              
                </>
            )}
        </Container>
    )
}

export default Cart;