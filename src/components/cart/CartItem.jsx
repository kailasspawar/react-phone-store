import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
    static propTypes = {
        item: PropTypes.object,
        incrementCart: PropTypes.func,
        decrementCart: PropTypes.func,
        removeItem: PropTypes.func
    }

    render() {
        const item = this.props.item;
        return (
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={`img/` + item.product.img}
                        style={{width: "5rem", height:"5rem"}}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product: </span>{item.product.name}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>
                        <span className="d-lg-none">price: </span>${item.product.price}
                    </strong>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span style={{padding: '10px'}} className="btn mx-1" 
                             onClick={() => {this.props.decrementCart(item.product.id, item.count)}}
                            >
                                -
                            </span>
                            <span style={{padding: '10px'}} className="btn mx-1">{item.count}</span>
                            <span
                                style={{padding: '10px'}}
                                className="btn mx-1"
                                onClick={() => {this.props.incrementCart(item.product.id, item.count)}}
                            >
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div onClick={()=>{this.props.removeItem(item.pid)}}>
                        <i className="cart-icon fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: {item.count}</strong>
                </div>
            </div>

        );
    }
}

export default CartItem;