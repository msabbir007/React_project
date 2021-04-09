import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import "./Shop.css";
import Product from "../Product/Product"
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10=fakeData;
    const [products, setProducts] = useState(first10);
    const[cart, setCart]=useState([]);
    const handleAddProduct=(product)=>{
        // console.log("Product added",product)
        const newcart=[...cart,product];
        setCart(newcart);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">     
                 
            {
             products.map(pd => <Product product={pd}  handleAddProduct={handleAddProduct}></Product>)
            }
                  
            </div>
            <div className="cart-container">
                <Cart cart_prop={cart}> </Cart>
            </div>
          
            
        </div>
    );
};

export default Shop;