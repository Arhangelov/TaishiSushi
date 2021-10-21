import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    gap: 3em;
    margin: 3%;
    
    /* transform-style: preserve-3d;
    transform: perspective(900px); */
`

export const SushiImg = styled.img`
    width: 50vw;
    margin-left:20%;
    max-height: 70vh;
    border-radius: 30px;
`

export const SushiTitle = styled.h1`
    color: #e1b486;
    position: absolute;
    margin-left: 25%;
    transform: translateZ(60px);
`

export const SushiDesc = styled.p`
    position:absolute;
    margin-left: 25%;
    color: #e1b486;
    margin-top: 8%;
    margin-right: 29%;
    font-size: 1.5em;
    transform: translateZ(60px)
`

export const SushiPortion = styled.h3`
    color: #e1b486;
    position: absolute;
    margin-left: 27%;
    margin-top: 31%;
    transform: translateZ(60px)
`

export const CartBtn = styled(Link)`
    position: absolute;
    text-decoration: none;
    margin-left: 49%;
    margin-top: 31%;
    padding-top: 0.5%;
    background-color: #842028;
    color: wheat;
    border-radius: 5px;
    width: 9vw;
    height: 4vh;
    text-align: center;
    transform: translateZ(40px)
`