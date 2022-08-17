import { useEffect, useState, useContext } from "react";
import { Context } from "../../Context/UserContext";
import { pushToCart } from "../../services/sushiService";
// import{ useDispatchCart } from '../../Context/CartContext';

import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPortion,
    ProductPrice,
    ProductButton
} from "./ProductsElements";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";

const Products = ({ heading, match }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useContext(Context);
  const [cart, setCart] = useContext(CartContext)

  // const dispatch = useDispatchCart();

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then(res => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  const cartHandler = ( prod, userId ) => {

    const qty = 1;
    const currProduct = {
      id: prod._id,
      title: prod.title,
      imageUrl: prod.imageUrl,
      price :prod.price,
      qty
    };

    console.log('curr', currProduct);
  
    if (currProduct) {
      setCart([...cart, currProduct])
    // dispatch({ type: 'ADD', currProduct});
    // pushToCart(currProduct, userId, qty);
  }
  }

  const notify = () => toast.success(`You successfully add product to cart`,{
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
    }
});
 
  return (
    <div>
      <Toaster/>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {products?.map((product) => {
            return (
              <ProductCard key={product._id}>
                <ProductImg src={`${product.imageUrl}`} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPortion>{product.portion}</ProductPortion>
                  <ProductPrice>{product.price.toFixed(2) + 'BGN'}</ProductPrice>
                  <ProductButton onClick={() => {
                    cartHandler(product, user._id); 
                    notify() 
                  }}>Add to cart</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;
