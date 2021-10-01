import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/Logout';

//Styles
import {NavLink, Nav, NavUser, NavLogo, Container, IconCart} from './NavbarElements';
import { ReactComponent as Logo } from '../../resources/Logo.svg';

//Contexts
import { Context } from '../../Context/UserContext';
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
    const [user, setUser] = useContext(Context);

    const handlerLogout = () => {
        return logout()
            .then(() => {
                return setUser({username: '', _id: ''})
            }).catch(err => console.log(err))
    };

     const checkAdmin = (id) => {
         const adminId = '60d0f1dcdbc74d4808424e95';
         
         if(id == adminId) return  <NavLink to='/add'>+ADD</NavLink>
         return '';
     };

     const items = useCart();
    
    return (
        <Container>
        <NavLogo>
        <Link to="/">
            <Logo>
                <logo to='/'></logo>
            </Logo>
        </Link>
        </NavLogo>

            <Nav>
                <NavLink to='/order-now'>ORDER NOW</NavLink>
                <NavLink to='/menu'>MENU</NavLink>
                <NavLink to='/contact-us'>CONTACT US</NavLink>
            </Nav>

            <NavUser>
                {checkAdmin(user._id)}
                
              {user.username
                ?  <>
                    <NavLink to='' onClick={handlerLogout}>LOGOUT</NavLink>
                    <NavLink to='/profile'>{user.username}</NavLink>
                    <NavLink to='/cart'><i class="fas fa-shopping-cart"/> ({items.length})</NavLink>
                    </>
                 : <>
                    <NavLink to='/register'>REGISTER</NavLink>
                    <NavLink to='/login'>LOGIN</NavLink>
                    </> 
              }
            </NavUser>
        </Container>

    )
}

export default Navbar;