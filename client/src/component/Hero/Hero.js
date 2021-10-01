import React from 'react';
import ImgBG from '../../resources/nakaji3.jpg'

import { HeroContainer, HeroImg, Name, WelcomeIn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImg src={ImgBG} alt='Sushi Bar' />
            {/* <Japan>よ う こ そ</Japan> */}
            <WelcomeIn>WELCOME IN</WelcomeIn>
            <Name>TAISHI SUSHI</Name>
        </HeroContainer>
    )
}

export default Hero
