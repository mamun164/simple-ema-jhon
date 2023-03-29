import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    
    let total = 0;
    for (const product of cart){
        total += product.price;
    }
    return (
        <div className='cart'>
            <p>Order Summary</p>
            <h2>Selected Items: {cart.length} </h2>
            <p>Total price: ${total}</p>
            <p>Total Shipping: </p>
            <p>Tax : </p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;