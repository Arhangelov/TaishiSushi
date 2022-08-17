import "./App.css";

import { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import {getUser} from './services/getUser';
import { Context } from './Context/UserContext';
import { CartContext } from "./Context/CartContext";
import { getUserCart } from "./services/sushiService";
import toast, { Toaster } from 'react-hot-toast';

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/Pages/HomePage/HomePage";
import AboutUs from "./component/Pages/AboutUs/AboutUs";
import AddPage from "./component/Pages/AddPage/AddPage";
import LoginPage from "./component/Pages/LoginPage/LoginPage";
import ProfilePage from "./component/Pages/Profile/Profile";
import RegisterPage from "./component/Pages/RegisterPage/RegisterPage";
import Menu from "./component/Pages/Menu/Menu";
import Cart from "./component/Pages/Cart/Cart";
import SelectedType from "./component/Pages/Menu/SelectedType/SelectedType";
import Details from './component/Pages/Details/Details';
import Footer from './component/Footer/Footer';
import TakenOrder from './component/Pages/TakenOrder/TakenOrder';



function App() {
  const [user, setUser] = useContext(Context);
  const [cart, setCart] = useContext(CartContext)
  console.log(cart)
  useEffect(() => {
      getUser().then(currentUser => {

          setUser({_id: currentUser._id, username: currentUser.username})
          toast.success(`Welcome ${currentUser.username}!`)
    
      }).catch(err => toast.error(`${err.massage}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          }
      }))
  }, [setUser])

  useEffect(() => {
    if (user && user._id) {
      getUserCart(user._id).then((userCart) =>
        setCart(userCart)
      );
    }
  }, [user]);


  return (
    <div name="App">
      <Toaster/>
        <Navbar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about-us' exact component={AboutUs} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/profile' exact component={ProfilePage} />
            <Route path='/menu' exact component={Menu} />
            <Route path='/menu/:type' exact component={SelectedType}/>
            <Route path='/menu/details/:id' exact component={Details}/>
            <Route path='/register' exact component={RegisterPage} />
            <Route path='/add' exact component={AddPage} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/finish-order' exact component={TakenOrder} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
