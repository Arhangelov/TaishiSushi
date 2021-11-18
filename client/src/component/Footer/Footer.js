import React from 'react';
import { FooterEl, Contacts, Container } from './FooterElements';
import { ReactComponent as Logo } from '../../resources/Logo.svg';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer () {

    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    return (
        <Container>
        <Contacts>
            <p>CONTACTS</p>
            <br/>
                <strong>Reservations and deliveries:</strong>
                <span> +359 48 665 491</span>
            <br/>
                <strong>E-mail office:</strong>
                <span> office@taishi.bg</span>
            <br/>
                <strong>E-mail for reservations:</strong>
                <span> reservation@taishi.bg</span>
        </Contacts>
            <br/>
            <a href='/'>Privacy policy</a> | <a href='/'>This site uses browser cookies</a> | <a href='/'>Terms of use</a>
            <br/>
            <a onClick={scrollToTop}><Logo/></a>
        <FooterEl>
            © 2021 - Taishi Sushi - All Rights Reserved.
        </FooterEl>
            
        </Container>
    )
}
