import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    

    
    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total += product.price;
        totalShipping +=product.shipping
    }

    // tax count 
    const tax = total*7/100;

    // grand total 
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <p>Order Summary</p>
            <h2>Selected Items: {cart.length} </h2>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;