import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

const CartTotals = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => {props.clearCart()}}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title"> subtotal :</span>{" "}
                            <strong>$ {props.cartSubtotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> tax :</span>{" "}
                            <strong>$ {props.cartTax} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total :</span>{" "}
                            <strong>$ {props.cartTotal} </strong>
                        </h5>
                        <PayPalButton 
                            totalAmount={props.cartTotal}
                            clearCart={props.clearCart}
                        />
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default CartTotals;