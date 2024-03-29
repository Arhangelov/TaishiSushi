import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

//Contexts
import { UserContext } from './Context/UserContext';
import { CartProvider } from './Context/CartContext';
// import store  from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <CartProvider>
          <App />
        </CartProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
