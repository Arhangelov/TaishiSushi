import "./App.css";

import { useEffect, useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {getUser} from './services/getUser';
import { Context } from './Context/UserContext';

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/Pages/HomePage/HomePage";
import AddPage from "./component/Pages/AddPage/AddPage";
import LoginPage from "./component/Pages/LoginPage/LoginPage";
import RegisterPage from "./component/Pages/RegisterPage/RegisterPage";
import Menu from "./component/Pages/Menu/Menu";
import Cart from "./component/Pages/Cart/Cart";
import SelectedType from "./component/Pages/Menu/SelectedType/SelectedType";
import Details from './component/Pages/Details/Details';
import Footer from './component/Footer/Footer';

import ImgBg from "./resources/Background.png";

function App() {

  const [user, setUser] = useContext(Context);

  useEffect(() => {
      getUser().then(currentUser => {

          setUser({_id: currentUser._id, username: currentUser.username})
    
      }).catch(err => console.log(err))
  }, [setUser])


  return (
    <div name="App">
        <Navbar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/menu' exact component={Menu} />
            <Route path='/menu/:type' exact component={SelectedType}/>
            <Route path='/menu/details/:id' exact component={Details}/>
            <Route path='/register' exact component={RegisterPage} />
            <Route path='/add' exact component={AddPage} />
            <Route path='/cart' exact component={Cart} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
