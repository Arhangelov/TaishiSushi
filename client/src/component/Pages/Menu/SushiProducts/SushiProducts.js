import { useRef, useEffect, useContext, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { pushToCart } from '../../../../services/sushiService';

//Context
import{ useDispatchCart } from '../../../../Context/CartContext';
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
    const [user, setUser] = useContext(Context);
    const [qty, setQty] = useState(0);
    const sushiData = {id, title, imageUrl, price}
    const dispatch = useDispatchCart();

    const addToCart = (sushi, userId, currQty) => {
        dispatch({ type: 'ADD', sushi})
        pushToCart(sushi, userId, currQty)
            .then(response => console.log(response))
    };

    //Tilt options
    const options = {
        scale: 1.1,
        speed: 1000,
        max: 15
    };


    //Decrement logic
    const decrement = () => {
        if(!qty == 0)
            setQty(qty - 1)
    }

    //Increment logic
    const increment = () => {
        setQty(qty + 1)
    };

    return (
        <> 
        <Tilt options={options}>
            <Card to={`/menu/details/${id}`}>
                <SetImage src={`${imageUrl}`} alt={`${title}`} />
            </Card>
                <SetPrice>{`${price.toFixed(2)} BGN`}</SetPrice>
                <SetTitle> {`${title}`} </SetTitle>
                <SetPortion>{`${portion}`}</SetPortion>
                <QtyDiv>
                    <Decrement onClick={decrement}>-</Decrement>
                    <SetQty value={qty}></SetQty>
                    <Increment onClick={increment}>+</Increment>
                </QtyDiv>
                <CartBtn onClick={() => addToCart(sushiData, user._id, qty)}>Add to Cart</CartBtn>
                <div>{qty}</div>
        </Tilt>
        </>
    )
}
