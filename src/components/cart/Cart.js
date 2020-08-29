import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let coursePrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        coursePrice = coursePrice + course.cost;
        
    }
    let tax = 0;
    if(coursePrice > 24){
        tax = coursePrice * 0.1;
    }
    else if(coursePrice > 17){
        tax = coursePrice * 0.2
    }
    else if(coursePrice > 0){
        tax = coursePrice * 0.5;
    }
    
   
    const grandTotal = coursePrice + tax.toFixed(2);
    return (
        <div style={{marginTop: '100px'}}>
            <h2 className="order-title"> <strong>Order summery</strong></h2>
             <p>Enrolled Courses : <strong>{cart.length}</strong> </p>
             <p>Courses Cost : <strong>${coursePrice}</strong> </p>
             <p>Tax : <strong>${tax.toFixed(2)}</strong> </p>
             <p>Total Cost : <strong>${grandTotal}</strong> </p>
        </div>
    );
};

export default Cart;