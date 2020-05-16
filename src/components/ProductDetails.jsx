import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class ProductDetails extends Component {

    render() {
        const product = this.props.location.state.product;
        return (
            <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{product.title}</h1>
              </div>
            </div>
            {/* end of title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={`img/` + product.img} className="img-fluid" alt="" />
              </div>
              {/* prdoduct info */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>model : {product.title}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{product.company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {product.price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product :
                </p>
                <p className="text-muted lead">{product.info}</p>
                {/* buttons */}
                <div>
                  <Link to="/products">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={product.inCart ? true : false}
                    onClick={() => {
                    // addToCart(product.get('id'));
                    // openModal(product.get('id'));
                    }}
                  >
                    {product.inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ProductDetails;