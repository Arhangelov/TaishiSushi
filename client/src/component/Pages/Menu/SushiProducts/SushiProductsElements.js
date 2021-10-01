import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

export const Card = styled(Link)`
    text-decoration: none;
    border-radius: 23px;
    width:100%;
    height:100%;
    text-align:center;
    cursor: pointer;
`

export const SetImage = styled.img `
    border-radius:20px 20px 20px 0;
    max-width: 60vw;
    max-height: 30vh; 
    z-index: 10;
`

export const SetPrice = styled.h4`
    position: absolute;
    background-color: #9F3434;
    border-radius: 8px;
    color: whitesmoke;
    width: 16vh;
    margin-top: -3%;
    text-align: center;
    z-index: 1;
`

export const SetTitle = styled.h5`
    color: darkgrey;
    font-style: italic;
    text-align: center;
`

export const SetPortion = styled.h5`
display: inline;
margin: 1em 0 2em 1em;
color: darkgray;
`

export const CartBtn = styled.button`
    position: absolute;
    color: #e1b486;
    background-color:#9F3434;
    width: 6vw;
    height: 4vh; 
    border: 3px;
    border-radius: 6px;
    font-size: 0.8em;
    cursor:pointer;
    margin-left: 13em;
    
`

export const QtyDiv = styled.div `
    position: absolute;
    width: 10vw;
    margin: -1em 6em;
`

export const SetQty = styled.input`
    outline: none;
    box-shadow: none;
    border: none;
    /* background-color: whitesmoke; */
    color: darkgray;
    width: 2vw;
    text-align: center;
    font-size: 1rem;
`

export const Decrement = styled.button`
border: none;
font-size: 1.3rem;
border-radius: 5px;
width: 2vw;
cursor: pointer;
`

export const Increment = styled.button`
border: none;
font-size: 1.3rem;
border-radius: 5px;
width: 2vw;
cursor: pointer;
`