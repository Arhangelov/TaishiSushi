import React from 'react'

import Hero from '../../Hero/Hero';
import Products from '../../Products/Products';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Products heading='Chose your favorite set' />
        </>
    )
}

export default HomePage