import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        axios.get('products/get-cart-items',
         { params: {uid: decoded.id }}).then(
            result => {
                const totals = this.getTotals(result.data);
                this.setState({
                    cartItems: result.data, 
                    cartSubtotal: totals.subTotal, 
                    cartTotal: totals.total
                });
            }
        ).catch(
            err => {console.log(err);}
        )
    }
    
    render() {
        return (
            this.state.cartItems.length ? 
            <>
                <section>
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList cartItems={this.state.cartItems} incrementCart={this.incrementCart}
                      decrementCart={this.decrementCart} removeItem={this.removeItem}/>
                        {
                            this.state.cartItems.length ? 
                            <CartTotals cartSubtotal={this.state.cartSubtotal}
                                cartTax={this.state.cartTax}
                                cartTotal={this.state.cartTotal}
                                clearCart={this.clearCart}
                            /> : null
                        }
                </section>
            </> : <EmptyCart /> 
        );
    }

    incrementCart = (id, count) => {
        count = count + 1;
        let newCartItems = this.setCount(id, count);
        this.setStateAfterCartUpdate(newCartItems);
    }

    decrementCart = (id, count) => {
        if (count === 1) {
            this.updateCart(id, 0);
            this.setItemsAfterFilter(id);
            this.props.setCartItem(id, false);
        } else {
            this.updateCart(id, count - 1);
            let newCartItems = this.setCount(id, count - 1);
            this.setStateAfterCartUpdate(newCartItems);
        }
    }

    setStateAfterCartUpdate = (cartItems) => {
        const totals = this.getTotals(cartItems);
            this.setState({
                cartItems: cartItems,
                cartSubtotal: totals.subTotal, 
                cartTotal: totals.total
            });
    }

    removeItem = (id) => {
        this.updateCart(id, -1, true);
        this.props.setCartItem(id, false);
        this.setItemsAfterFilter(id);
    }

    updateCart = (id, count, removeItem = false) => {
        axios.post('products/update-cart', {pid: id, count: count, remove: removeItem}).then(
            response => {
                console.log(response);
            }
        ).catch(err => {
            console.log(err);
        })
    }

    clearCart = () => {
        axios.delete('products/remove-cart').then(
            res => console.log(res)
        ).catch(
            err => console.log(err)
        )
       this.props.clearIncart();
    }

    setCount = (id, count) => {
        const newCartItems = this.state.cartItems.map(
            item => {
                if (item.pid === id) {
                    item.count = count;
                }
                return item;
            }
        );
        return newCartItems;
    }

    setItemsAfterFilter = (id) => {
        const newCartItems = this.state.cartItems.filter(
            item => {
                if (item.pid !== id) {
                    return item;
                }
            }
        )
        this.setState({cartItems: newCartItems});
    }

    getTotals = (cartItems) => {
        let subTotal = 0;
        cartItems.map(
            item => {
                subTotal += item.count * item.product.price;
            }
        );
        let total = subTotal + this.state.cartTax;
        return {
            subTotal,
            total
        };
    }
}

export default Cart;