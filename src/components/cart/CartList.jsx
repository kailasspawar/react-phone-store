import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    return (
        <div className="container-fluid">
            {
                props.cartItems.map(
                    item => (
                        <CartItem key={item.product.id} item={item} 
                            incrementCart={props.incrementCart} decrementCart={props.decrementCart}
                            removeItem={props.removeItem}
                        /> 
                    )
                )
            }
        </div>
    )
}

export default CartList;