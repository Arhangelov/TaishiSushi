import { useRef, useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import VanillaTilt from 'vanilla-tilt';
import { pushToCart } from '../../../../services/sushiService';
import toast, {Toaster} from 'react-hot-toast';
//Context
import { CartContext } from '../../../../Context/CartContext';
import { Context } from "../../../../Context/UserContext";

//Styles
import { 
    Card,
    SetImage,
    SetPrice,
    SetTitle,
    SetPortion,
    CartBtn,
    SetQty,
    QtyDiv,
    Increment,
    Decrement
} from '../SushiProducts/SushiProductsElements';

//Tilt
function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} /> ;
}

//Component
export const  SushiProducts = ( { id, title, imageUrl, portion, price } ) => {
    const history = useHistory();
    const [user] = useContext(Context);
    const [qty, setQty] = useState(1);
    const sushiData = {id, title, imageUrl, price}
    // const dispatch = useDispatchCart();
    const [cart, setCart] = useContext(CartContext)

    const addToCart = (sushi, userId, currQty) => {
        if(user.username === '') {
            toast.error('You must be logged in');
        } else {
            // dispatch({ type: 'ADD', sushi})
            setCart((cart) => cart.push(sushi))
            pushToCart(sushi, userId, currQty)
            .then()
        }
    };

    //Notification
    const notify = () => toast.success(`You successfully add product to cart`,{
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        }
    });

    //Tilt options
    const options = {
        scale: 1.1,
        speed: 1000,
        max: 15
    };


    //Decrement logic
    const decrement = () => {
        if(!qty === 1)
            setQty(qty - 1)
    }

    //Increment logic
    const increment = () => {
        setQty(qty + 1)
    };

    return (
        <> 
        <Toaster/>
        <Tilt options={options}>
            <Card to={`/menu/details/${id}`}>
                <SetImage src={imageUrl} alt={`${title}`} />
            </Card>
                <SetPrice>{`${price.toFixed(2)} BGN`}</SetPrice>
                <SetTitle> {title} </SetTitle>
                <SetPortion>{portion}</SetPortion>
                <QtyDiv>
                    <Decrement onClick={decrement}>-</Decrement>
                    <SetQty value={qty}></SetQty>
                    <Increment onClick={increment}>+</Increment>
                </QtyDiv>
                <CartBtn onClick={() => {addToCart(sushiData, user._id, qty); notify() }}>Add to Cart</CartBtn>
        </Tilt>
        </>
    )
}
