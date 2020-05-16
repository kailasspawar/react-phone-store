import React, { Component } from 'react';
import {ButtonContainer} from './Button'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link, BrowserRouter } from 'react-router-dom';

class Modal extends Component {
    static propTypes = {
        product: ImmutablePropTypes.shape({
          id: PropTypes.number,
          img: PropTypes.string,
          title: PropTypes.string,
          price: PropTypes.number,
          inCart: PropTypes.bool,
        }).isRequired,
        closeModal: PropTypes.func,
        goToCart: PropTypes.func,
    }

    render() {
        const product = this.props.product;
        return (
            <>
                <ModalContainer>
                    <BrowserRouter>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                                <h5>item added to cart</h5>
                                <img src={`img/${product.get('img')}`} alt="" className="img-fluid"/>
                                <h5>{product.get('title')}</h5>
                                <div className="text-muted">price: ${product.get('price')}</div>
                                <Link to="/products">
                                    <ButtonContainer
                                        onClick={this.props.closeModal}
                                    >
                                        continue shopping
                                    </ButtonContainer>
                                </Link>
                                    <ButtonContainer cart onClick={() => {this.props.closeModal();
                                        this.props.goToCart();
                                    }
                                    }>
                                        Go To Cart
                                    </ButtonContainer>
                            </div>
                        </div>
                    </div>
                    </BrowserRouter>
                </ModalContainer>              
            </>
        );
    }

}

const ModalContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 background: rgba(0, 0, 0, 0.3);
 display: flex;
 align-items: center;
 justify-content: center;
 #modal {
     background: var(--mainWhite);
 }
`
;
export default Modal;
