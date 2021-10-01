import styled from 'styled-components';

export const ProductsContainer = styled.div`
    margin-top: 100vh;
    max-width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background-color: #100C0B;
    color: #fff;
    `
    
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;

    margin: 0 auto;
    `
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const ProductImg = styled.img`
    height: 230px;
    min-width: 300px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 6px 6px #E1B486;
    object-fit: cover;

    :hover {
        width: 120%;
        box-shadow: 9px 9px 9px 9px black;
    }
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #E1B486;
`

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    min-height: 21vh;
`

export const ProductPortion = styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`
export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border-radius: 2rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

     :hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`