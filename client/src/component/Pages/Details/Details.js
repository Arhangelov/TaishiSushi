import { useEffect, useState, useRef, useContext } from 'react';
import { getSushiDetails } from '../../../services/sushiService';
import VanillaTilt from 'vanilla-tilt';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../../../Context/UserContext';
// import { useDispatchCart } from '../../../Context/CartContext'


import { pushToCart } from '../../../services/sushiService';
import {
    Container,
    SushiImg,
    SushiTitle,
    SushiDesc,
    SushiPortion,
    CartBtn
} from './DetailsElements';

export const Details = ({ match }) => {
    const sushiId = match.params.id;
    const [sushi, setSushi] = useState([]);
    const [user] = useContext(Context);
    // const dispatch = useDispatchCart();

    useEffect(() => {
        getSushiDetails(sushiId)
            .then(res =>  setSushi(res))
            .catch(error => console.log(error.message));
    },[]);

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);
      
        useEffect(() => {
          VanillaTilt.init(tilt.current, options);
        }, [options]);
      
        return <div ref={tilt} {...rest} /> ;
    };

    const addToCart = (sushi, userId) => {
        const sushiItem = {
            _id: sushi._id,
            title: sushi.title,
            imageUrl: sushi.imageUrl,
            price: sushi.price,
        }
        const qty = 1;

        // dispatch({ type: 'ADD', sushiItem});
        pushToCart(sushiItem, userId, qty)
            .then(toast.success(`You successfully add product to cart`,{
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            }))
            .catch(err => {
                toast.error(`${err.message}`)
            })
    };


    const options = {
        scale: 1,
        speed: 1000,
        max: 15,
        perspective: 500,
        transition: true,
    };

    return (
        <>
        <Tilt options={options} style={{transformStyle:'preserve-3d', transform: 'perspective(900px)'}}>
        <Container>
            <SushiImg src={`${sushi.imageUrl}`} alt="Sushi Image" />
            <SushiTitle>{`${sushi.title}`}</SushiTitle>
            <SushiDesc>{`${sushi.description}`}</SushiDesc>
            <SushiPortion>{`${sushi.portion}`}</SushiPortion>
            <CartBtn onClick = {() => addToCart(sushi, user._id)}>Add to Cart</CartBtn>
        </Container>
        </Tilt>

        </>
    )
}

export default Details;