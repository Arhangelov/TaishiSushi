import { useEffect, useState, useRef } from 'react';
import { getSushiDetails } from '../../../services/sushiService';
import VanillaTilt from 'vanilla-tilt';

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

    useEffect(() => {
        getSushiDetails(sushiId)
            .then(res => {console.log(res); setSushi(res)})
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

    const addToCart = (sushi) => {
        console.log(sushi);
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
            <CartBtn onClick = {() => addToCart(sushi)}>Add to Cart</CartBtn>
        </Container>
        </Tilt>

        </>
    )
}

export default Details;