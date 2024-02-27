import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i<cart.length; i++) {
        const totalPrice = cart[i];
        total = total + totalPrice.price;
    }
    
    

  
    return (
        <div className='cart'>
            <h1>This is Cart</h1>
            <h3><small>Added Request: {cart.length}</small></h3>
            <h3><small>Added Price: {total}$</small></h3>
            
        </div>
    );
};

export default Cart;