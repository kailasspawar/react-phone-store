import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import Modal from './Modal';

class Product extends Component {
    
    static propTypes = {
        product: ImmutablePropTypes.shape({
          id: PropTypes.number,
          img: PropTypes.string,
          title: PropTypes.string,
          price: PropTypes.number,
          inCart: PropTypes.bool,
        }).isRequired,
        handleAddToCart : PropTypes.func
    };

    render() {
        const product = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <img src={`img/` + product.get('img')} alt="product" className="card-img-top" 
                            onClick={() => {this.showDetails(product)}}
                        />
                        <button className="cart-btn"
                            disabled={product.get('inCart') ? true : false}
                            onClick={() => {
                                this.addToCart(product.get('id'));
                                this.openModal(product);
                            }}
                        >
                        {
                            product.get('inCart') ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    in Cart
                                </p>
                            ) : (
                                <i className="fas fa-cart-plus"></i>
                            )
                        }
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{product.get('title')}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {product.get('price')}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }

    showDetails(product) {
        product = product.toObject();
        this.props.history.push({pathname: '/details',
        search: '',
        state: { product: product}});
    }

    addToCart = (id) => {
        console.log('Added to Cart....');
        this.props.handleAddToCart(id);
    }

    openModal = (product) => {
        ReactDom.render(<Modal product={product} closeModal={this.closeModal} goToCart={this.goToCart}/>, 
          document.getElementById('modalDiv')
        );
    }

    closeModal = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('modalDiv'));
    }

    goToCart = () => {
        this.props.history.push('/cart');
    }
}

export default withRouter(Product);

const ProductWrapper = styled.div`
 .card {
     border-color: transparent;
     transition: all 0.5s linear;
  }
 .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all 0.5s linear;
  }
  &:hover {
      .card {
          border: 0.04rem solid rgba(0, 0, 0, 0.2);
          box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      }
      .card-footer {
          backgound: rgba(247, 247, 247);
      }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
      transition: all 0.5s linear; 
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color:var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 0.5s ease-in-out;
    }
  .img-container:hover .cart-btn {
      transform: translate(0, 0);
  }
  .cart-btn:hover {
      color: var(--mainBlue);
      cursor: pointer;
      right: 1px;
  }





`